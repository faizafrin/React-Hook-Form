import React from 'react';
import bgImg from '../assets/bm6.webp';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = (data) => console.log(data);

  const passwordRequirements = {
    required: true,
    pattern: /^(?=.*[@#$])(?=.*[0-9]{4})(?=.*[A-Z]{2})(?=.*[a-z]{2}).*$/,
    minLength: 8
  };

  const password = watch('password');

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>Register Form</h2>
          <span>Submit your info and we will be reach out in 30-mins</span>

          <form
            id="form"
            className="flex flex-col"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              {...register('username', { required: true })}
              placeholder="Username"
            />
            {errors.username?.type === 'required' && 'Name is required'}

            <input
              type="text"
              {...register('Email', {
                required: true,
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i
              })}
              placeholder="E-mail"
            />
            {errors.Email?.type === 'required' && 'Email is required'}
            {errors.Email?.type === 'pattern' && 'Entered Email is in the wrong format'}

            <input
              type="password"
              {...register('password', passwordRequirements)}
              placeholder="Password"
            />
            {errors.password?.type === 'required' && 'Password is required'}
            {errors.password?.type === 'pattern' &&
              'Password must contain at least 1 special character, 4 numbers, 2 capital letters, and 2 small letters'}
            {errors.password?.type === 'minLength' && 'Password must be at least 8 characters long'}

            <input
              type="password"
              {...register('confirmpassword', {
                validate: (value) => value === password || 'Passwords do not match'
              })}
              placeholder="Confirm Password"
            />
            {errors.confirmpassword && <p>{errors.confirmpassword.message}</p>}

            <input
              type="number"
              {...register('mobile number', { maxLength: 12, minLength: 6 })}
              placeholder="Mobile number"
            />
            {errors['mobile number']?.type === 'minLength' && 'Entered number is less than 6 digits'}
            {errors['mobile number']?.type === 'maxLength' && 'Entered number is more than 12 digits'}

            <div>
              <label>
                <input
                  type="text"
                  value="Gender"
                  {...register('gender', { required: true })}
                />
                
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="female"
                  {...register('gender', { required: true })}
                />
                Female
              </label>
            </div>
            <div>
              <label>
                <input
                  type="checkbox"
                  value="male"
                  {...register('gender', { required: true })}
                />
                Male
              </label>
            </div>
            {errors.gender && <p>Please select a gender</p>}

            <button className="btn">Submit</button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>
    </section>
  );
}
