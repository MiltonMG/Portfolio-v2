"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from 'emailjs-com';

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    content: '(+503) 7045-8617'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    content: 'milton.elsalvador26@gmail.com'
  },
  {
    icon: <FaMapMarkerAlt />,
    title: 'Address',
    content: 'Atiquizaya, Ahuachapán, El Salvador'
  }
];


const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false); // Estado para manejar el envío

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true); // Establecer isSending en true cuando comienza el envío

    console.log(formData);

    //TODO: Agregar variables de entorno para las credenciales de emailjs
    emailjs.send(
      process.env.NEXT_PUBLIC_SERVICE_ID, // Service ID
      process.env.NEXT_PUBLIC_TEMPLATE_ID, // Template ID
      {
        firstname: formData.firstname,
        lastname: formData.lastname,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      process.env.NEXT_PUBLIC_PUBLIC_KEY // Public Key
    )
      .then((response) => {
        alert('Email sent successfully');
        setFormData({
          firstname: '',
          lastname: '',
          email: '',
          subject: '',
          message: '',
        });
        setIsSending(false); // Restablecer isSending en false después del envío
      }, (error) => {
        alert('Failed to send email');
        setIsSending(false); // Restablecer isSending en false en caso de error
      });
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1.2,
          duration: 0.4,
          ease: "easeIn"
        }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent"> Let's Work together </h3>
              <p className="text-white/60">
                Have a project in mind? Let's talk about it.
                I'm available for freelance work, internships and full-time positions.
              </p>

              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" value={formData.firstname} onChange={handleChange} type="text" placeholder="Name (required)" required />
                <Input name="lastname" value={formData.lastname} onChange={handleChange} type="text" placeholder="Last Name" />
                <Input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email (required)" required />
                <Input name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="Subject (required)" required />
              </div>
              {/* TextArea */}
              <Textarea name="message" value={formData.message} onChange={handleChange} className="h-[250px]" placeholder="Type your message here. (required)" required />

              {/* Button */}
              <Button type="submit" size="" className={`self-start max-w-40 ${isSending ? 'bg-[#1D1C22] hover:bg-[#1D1C22] text-white' : ''}`} disabled={isSending} >
                {isSending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex gap-6 items-center">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[20px] xl:text-[26px]"> {item.icon} </div>
                  </div>
                  <div className=" flex-1">
                    <p className="text-white/60"> {item.title} </p>
                    {
                      (item.title === 'Phone') ? <a href={`tel:${item.content}`} className="text-accent text-xl hover:text-white hover:transition-all duration-500"> {item.content} </a> : (item.title === 'Email') ? <a href={`mailto:${item.content}`} className="text-accent text-xl hover:text-white hover:transition-all duration-500"> {item.content} </a> : <h3 className="text-xl"> {item.content} </h3>
                    }
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

    </motion.section>
  )
}

export default Contact;
