import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
function Login() {

  const validationSchema = Yup.object().shape({

    fullname: Yup.string().required("Full name is required"),
    username: Yup.string().max(15, "username must be 15 characters").required("username required"),
    email: Yup.string().email("Invalid email").required("mail reqquired"),
    password: Yup.string().min(8, "Password should be of 8").required("pass required"),
    city: Yup.string().required("city is required"),
    phone: Yup.string().min(10, "must be 10 chars").required("phone is required").matches(/^[0-9]+$/, 'Phone number must contain only numbers'),
    gender: Yup.boolean().required("gender is required"),
  })

  const formik = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      city: "",
      phone: "",
      gender: "",
    },
    onSubmit: (values) => {
      console.log("Values : ", values);
    },
    validationSchema: validationSchema,
  })

  return (
    <div>


      <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">

          <h2 className="text-2xl font-bold leading-tight text-black">Sign up to create account</h2>

          <form onSubmit={formik.handleSubmit} className="mt-8">
            <div className="space-y-5">
              <div>
                <label htmlFor="name" className="text-base font-medium text-gray-900">
                  {' '}
                  Full Name{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Full Name"
                    id="name"
                    name='fullname'
                    value={formik.values.fullname}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></input>
                  {formik.touched.fullname&&formik.errors.fullname ? <p className="text-red-400">{formik.errors.fullname}</p> : null}
                </div>
              </div>
              <div>
                <label htmlFor="uname" className="text-base font-medium text-gray-900">
                  {' '}
                  User Name{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="User Name"
                    id="uname"
                    name='username'
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></input>
                  {formik.touched.username&&formik.errors.username ? <p className="text-red-400">{formik.errors.username}</p> : null}

                </div>
              </div>
              <div>
                <label htmlFor="email" className="text-base font-medium text-gray-900">
                  {' '}
                  Email address{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    id="email"
                    name='email'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}


                  ></input>
                  {formik.touched.email&&formik.errors.email ? <p className="text-red-400">{formik.errors.email}</p> : null}

                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-base font-medium text-gray-900">
                    {' '}
                    Password{' '}
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    id="password"
                    name='password'
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}


                  ></input>
                  {formik.touched.password&&formik.errors.password ? <p className="text-red-400">{formik.errors.password}</p> : null}

                </div>
              </div>
              <div>
                <label htmlFor="city" className="text-base font-medium text-gray-900">
                  {' '}
                  City{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="City"
                    id="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></input>
                  {formik.touched.city&&formik.errors.city ? <p className="text-red-400">{formik.errors.city}</p> : null}

                </div>
              </div>

              <div>
                <label htmlFor="phone" className="text-base font-medium text-gray-900">
                  {' '}
                  Phone{' '}
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="text"
                    placeholder="Phone"
                    id="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></input>
                  {formik.touched.phone&&formik.errors.phone ? <p className="text-red-400">{formik.errors.phone}</p> : null}

                </div>
              </div>

              <div>
                <label className="text-base font-medium text-gray-900">
                  {' '}
                  Gender{' '}
                </label>
                <div className="mt-2 flex items-center">

                  <input
                    className="h-6 w-8"
                    type="radio"
                    name='gender'
                    id="gender"

                    checked={formik.values.gender === "Male"}
                    value="Male"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                  > </input> <label className="ml-1" htmlFor="gender_male">Male</label>
                  <input
                    className="h-6 w-8 ml-12"
                    type="radio"
                    name='gender'
                    id="gender-female"
                    checked={formik.values.gender === "Female"}
                    value="Female"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  > </input>  <label className="ml-1" htmlFor='gender-female'>Female</label>


                </div>
                {formik.touched.gender&&formik.errors.gender ? <p className="text-red-400">{formik.errors.gender}</p> : null}

              </div>

              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Create Account
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>



    </div>
  )
}

export default Login
