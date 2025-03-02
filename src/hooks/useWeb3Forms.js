import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const API_KEY = import.meta.env.VITE_WEB3FORMS_API_KEY;

const useWeb3Forms = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = (formData) => {
    let newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = 'First name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.termsAccepted)
      newErrors.termsAccepted = 'Accept the terms & policy';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (formData, resetForm) => {
    if (!validateForm(formData)) {
      toast.error('Please fill in all required fields correctly!');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post('https://api.web3forms.com/submit', {
        access_key: API_KEY,
        name: formData.firstName,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      });

      if (response.data.success) {
        toast.success('Message sent successfully!');
        resetForm();
        setErrors({});
      } else {
        toast.error(response.data.message || 'Something went wrong!');
      }
    } catch (error) {
      toast.error('Failed to send message. Try again later.');
    }

    setIsSubmitting(false);
  };

  return { handleSubmit, isSubmitting, errors };
};

export default useWeb3Forms;
