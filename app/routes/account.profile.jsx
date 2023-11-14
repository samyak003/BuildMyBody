import { json, redirect } from '@shopify/remix-oxygen';
import {
  Form,
  useActionData,
  useNavigation,
  useOutletContext,
} from '@remix-run/react';
// import Footer from '~/Components/Footer';

export const meta = () => {
  return [{ title: 'Profile' }];
};




export async function loader({ context }) {
  const customerAccessToken = await context.session.get('customerAccessToken');
  if (!customerAccessToken) {
    return redirect('/account/login');
  }
  return json({});
}

export async function action({ request, context }) {
  const { session, storefront } = context;

  if (request.method !== 'PUT') {
    return json({ error: 'Method not allowed' }, { status: 405 });
  }

  const form = await request.formData();
  const customerAccessToken = await session.get('customerAccessToken');
  if (!customerAccessToken) {
    return json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const password = getPassword(form);
    const customer = {};
    const validInputKeys = [
      'firstName',
      'lastName',
      'email',
      'password',
      'phone',
    ];
    for (const [key, value] of form.entries()) {
      if (!validInputKeys.includes(key)) {
        continue;
      }
      if (key === 'acceptsMarketing') {
        customer.acceptsMarketing = value === 'on';
      }
      if (typeof value === 'string' && value.length) {
        customer[key] = value;
      }
    }

    if (password) {
      customer.password = password;
    }

    // update customer and possibly password
    const updated = await storefront.mutate(CUSTOMER_UPDATE_MUTATION, {
      variables: {
        customerAccessToken: customerAccessToken.accessToken,
        customer,
      },
    });

    // check for mutation errors
    if (updated.customerUpdate?.customerUserErrors?.length) {
      return json(
        { error: updated.customerUpdate?.customerUserErrors[0] },
        { status: 400 },
      );
    }

    // update session with the updated access token
    if (updated.customerUpdate?.customerAccessToken?.accessToken) {
      session.set(
        'customerAccessToken',
        updated.customerUpdate?.customerAccessToken,
      );
    }

    return json(
      { error: null, customer: updated.customerUpdate?.customer },
      {
        headers: {
          'Set-Cookie': await session.commit(),
        },
      },
    );
  } catch (error) {
    return json({ error: error.message, customer: null }, { status: 400 });
  }
}

export default function AccountProfile() {
  const account = useOutletContext();
  const { state } = useNavigation();
  const action = useActionData();
  const customer = action?.customer ?? account?.customer;

  return (
    <>
      <div className='profile-clr pb-5 '>
        <div className="container">
          <div className="account-profile">
            <h2 style={{color:"#ff2828"}}>
              <em className=''>My Profile</em>
            </h2>
            <hr style={{width:"30%"}} className='bg-dark'/>
            {/* <br /> */}
            <Form method="PUT" className='mt-5'>
              <div className="row">
                <div className="col ">
                  <legend className=''>Personal information</legend>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <fieldset>
                    <label htmlFor="firstName" className='profile-name '>First name</label> <br />
                    <input
                      className=' profile-input w-100'
                      id="firstName"
                      name="firstName"
                      type="text"
                      autoComplete="given-name"
                      placeholder="First name"
                      aria-label="First name"
                      defaultValue={customer.firstName ?? ''}
                      minLength={2}
                    />
                    <br />
                    <label htmlFor="lastName" className='profile-name '>Last name</label>
                    <br />
                    <input
                      className=' profile-input w-100'
                      id="lastName"
                      name="lastName"
                      type="text"
                      autoComplete="family-name"
                      placeholder="Last name"
                      aria-label="Last name"
                      defaultValue={customer.lastName ?? ''}
                      minLength={2}
                    />
                  </fieldset>
                </div>
                <div className="col ">
                  <fieldset>
                    <label htmlFor="phone" className='profile-name '>Mobile</label>
                    <br />
                    <input
                      className=' profile-input w-100'
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Mobile"
                      aria-label="Mobile"
                      defaultValue={customer.phone ?? ''}
                    />
                    <br />
                    <label htmlFor="email" className='profile-name '>Email address</label>
                    <br />
                    <input
                      className=' profile-input w-100'
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      placeholder="Email address"
                      aria-label="Email address"
                      defaultValue={customer.email ?? ''}
                    />
                    <div className="account-profile-marketing">
                      <input
                        id="acceptsMarketing"
                        name="acceptsMarketing"
                        type="checkbox"
                        placeholder="Accept marketing"
                        aria-label="Accept marketing"
                        defaultChecked={customer.acceptsMarketing}
                      />
                      <label htmlFor="acceptsMarketing">
                        <p className='ml-2 '>
                          Subscribed to marketing communications
                        </p>

                      </label>
                    </div>
                    <div className="">
                      <button className='w-25 p-1 profile-btn-display2 profile-btn'>
                        Edit
                      </button>
                    </div>
                  </fieldset>
                </div>
              </div>


              <br />
              <div className="row">
                <div className="col ">
                  <legend className='' >Change password (optional)</legend>
                </div>
                <div className="col-sm-12 col-lg-6 col-md-6 d-flex justify-content-lg-end justify-content-md-end  ">
                  <button type="submit" className='w-25 text-center p-1 profile-btn-display3 profile-btn' disabled={state !== 'idle'}>
                    {state !== 'idle' ? 'Updating' : 'Update'}
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 col-sm-12">
                  {/* <legend>Change password (optional)</legend> */}
                  <fieldset>
                    <div className="row">
                      <div className="col">
                        <label htmlFor="currentPassword" className='profile-name '>Current password</label>
                        <input
                          className=' profile-input w-100'
                          id="currentPassword"
                          name="currentPassword"
                          type="password"
                          autoComplete="current-password"
                          placeholder="Current password"
                          aria-label="Current password"
                          minLength={8}
                        />

                        <label htmlFor="newPassword" className='profile-name '>New password</label>
                        <input

                          className='  profile-input w-100'
                          id="newPassword"
                          name="newPassword"
                          type="password"
                          placeholder="New password"
                          aria-label="New password"
                          minLength={8}
                        />

                        <label htmlFor="newPasswordConfirm" className='profile-name '>New password (confirm)</label>

                        <input
                          className='  profile-input w-100'
                          id="newPasswordConfirm"
                          name="newPasswordConfirm"
                          type="password"
                          placeholder="New password (confirm)"
                          aria-label="New password confirm"
                          minLength={8}
                        />
                        <br />
                        <small className='' style={{ color: 'blue' }}>Passwords must be at least 8 characters.</small>
                      </div>



                    </div>
                    <div className=" profile-btn-display4">
                      <button type="submit" className='w-25 text-center p-1 profile-btn' disabled={state !== 'idle'}>
                        {state !== 'idle' ? 'Updating' : 'Update'}
                      </button>
                    </div>

                  </fieldset>
                  {action?.error ? (
                    <p>
                      <mark>
                        <small>{action.error}</small>
                      </mark>
                    </p>
                  ) : (
                    <br />
                  )}
                </div>


              </div>

            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
{/* {action?.error ? (
            <p>
              <mark>
                <small>{action.error.message}</small>
              </mark>
            </p>
          ) : (
            <br />
          )}
<button type="submit" disabled={state !== 'idle'}>
  {state !== 'idle' ? 'Updating' : 'Update'}
</button> */}

function getPassword(form) {
  let password;
  const currentPassword = form.get('currentPassword');
  const newPassword = form.get('newPassword');
  const newPasswordConfirm = form.get('newPasswordConfirm');

  let passwordError;
  if (newPassword && !currentPassword) {
    passwordError = new Error('Current password is required.');
  }

  if (newPassword && newPassword !== newPasswordConfirm) {
    passwordError = new Error('New passwords must match.');
  }

  if (newPassword && currentPassword && newPassword === currentPassword) {
    passwordError = new Error(
      'New password must be different than current password.',
    );
  }

  if (passwordError) {
    throw passwordError;
  }

  if (currentPassword && newPassword) {
    password = newPassword;
  } else {
    password = currentPassword;
  }

  return String(password);
}

const CUSTOMER_UPDATE_MUTATION = `#graphql
  # https://shopify.dev/docs/api/storefront/latest/mutations/customerUpdate
  mutation customerUpdate(
    $customerAccessToken: String!,
    $customer: CustomerUpdateInput!
    $country: CountryCode
    $language: LanguageCode
  ) @inContext(language: $language, country: $country) {
    customerUpdate(customerAccessToken: $customerAccessToken, customer: $customer) {
      customer {
        acceptsMarketing
        email
        firstName
        id
        lastName
        phone
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        code
        field
        message
      }
    }
  }
`;
