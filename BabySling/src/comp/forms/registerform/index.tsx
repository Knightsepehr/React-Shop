import React, { useState } from 'react';
import YellowButton from '../../buttons/yellowbutton';

interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  birthdate: string;
}

interface Props {
  onSubmit: (formData: FormData) => void;
}

const RegistrationForm: React.FC<Props> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    birthdate: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col items-center justify-center max-w-max gap-4">
        <div className="flex gap-2 justify-end w-full">
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            className="border border-gray-300 py-2 w-64 text-xs"
            value={formData.firstname}
            onChange={handleChange}
          />
        </div>
        <div className="flex gap-2 justify-end w-full">
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            className="border border-gray-300 py-2 w-64 text-xs"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end gap-2 w-full">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border border-gray-300 py-2 w-64 text-xs"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end gap-2 w-full">
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border border-gray-300 py-2 w-64 text-xs"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-end gap-2 w-full">
          <label htmlFor="birthdate">Birthdate</label>
          <input
            type="text"
            name="birthdate"
            id="birthdate"
            className="border border-gray-300 py-2 w-64 text-xs"
            value={formData.birthdate}
            onChange={handleChange}
          />
        </div>
        <YellowButton text='Create Account' />
      </div>
    </form>
  );
};

export default RegistrationForm;
