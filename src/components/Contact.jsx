import { socialLinks } from "../data/data"
import { useState } from "react"
import { motion } from "framer-motion"


function Contact({refProps}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Vous pouvez ajouter l'envoi d'email ici
    alert('Merci pour votre message! Je vous répondrai bientôt.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <motion.div 
      ref={refProps}
      className="min-h-screen bg-gradient-to-br from-base-200 to-base-300 py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Titre */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl font-bold text-primary mb-4">Contact Me</h1>
          <p className="text-xl text-base-content/60">Feel free to send me a message</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

                   {/* Formulaire de Contact */}
          <motion.div 
            className="card bg-base-100 shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card-body">
              <h2 className="card-title text-2xl text-primary mb-6">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nom */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Your name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Vatosoa Sedera"
                    className="input input-bordered input-primary w-full"
                    required
                  />
                </div>

                {/* Email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Your Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="vatosoa7028@gmail.com"
                    className="input input-bordered input-primary w-full"
                    required
                  />
                </div>

                {/* Message */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Your Message</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="textarea textarea-bordered textarea-primary w-full h-32"
                    required
                  />
                </div>

                {/* Bouton Envoyer */}
                <div className="form-control pt-4">
                  <button type="submit" className="btn btn-primary btn-lg w-full">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
 

          {/* Liens de Contact */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Carte d'informations */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl text-primary mb-4">My Contacts</h2>
                
                {/* Email */}
                <div className="flex items-center gap-4 p-3 bg-base-200 rounded-lg">
                  <div className="text-primary text-2xl">📧</div>
                  <div>
                    <p className="text-sm text-base-content/60">Email</p>
                    <a href="mailto:vatosoa7028@gmail.com" className="text-primary font-semibold hover:underline">
                      vatosoa7028@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-4 p-3 bg-base-200 rounded-lg">
                  <div className="text-primary text-2xl">💬</div>
                  <div>
                    <p className="text-sm text-base-content/60">WhatsApp</p>
                    <a href="https://wa.me/261380755474" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                      +261 38 07 55 474
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-base-200 rounded-lg">
                  <div className="text-primary text-2xl">🔗</div>
                  <div>
                    <p className="text-sm text-base-content/60">Comeup</p>
                    <a href="https://comeup.com/en/@sedera-devweb" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                      @Sedera_DevWeb
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Liens Réseaux Sociaux */}
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl text-primary mb-4">Follow Me</h2>
                
                <div className="flex flex-wrap gap-3">
                  {socialLinks
                    .filter((social) => ['github', 'linkedin', 'facebook'].includes(social.name))
                    .map((social) => {
                    const iconMap = {
                      github: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      ),
                      linkedin: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.81 0-9.728h3.554v1.375c.427-.659 1.191-1.597 2.898-1.597 2.117 0 3.704 1.385 3.704 4.362v5.588zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.705 0-.955.765-1.705 1.959-1.705 1.188 0 1.916.75 1.938 1.705 0 .947-.75 1.705-1.982 1.705zm1.581 11.597H3.715V9.724h3.203v10.728zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>
                      ),
                      facebook: (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      ),
                    };

                    return (
                      <a 
                        key={social.name}
                        href={social.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-outline btn-primary gap-2 capitalize"
                      >
                        {iconMap[social.name] || '🔗'}
                        {social.name}
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Contact