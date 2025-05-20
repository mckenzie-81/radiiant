
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const RequestForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Success message
      toast.success('Project request submitted successfully! We will contact you soon.');
      
      // Reset form
      setName('');
      setEmail('');
      setCompany('');
      setProjectType('');
      setMessage('');
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo/40"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo/40"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
            Company
          </label>
          <input
            type="text"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo/40"
            placeholder="Your company name"
          />
        </div>
        
        <div>
          <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
            Project Type <span className="text-red-500">*</span>
          </label>
          <select
            id="projectType"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo/40"
          >
            <option value="" disabled>Select a service</option>
            <option value="Business Management Systems">Business Management Systems</option>
            <option value="Customer Intelligence (CRM)">Customer Intelligence (CRM)</option>
            <option value="SMS Campaign Platform">SMS Campaign Platform</option>
            <option value="Data Provisioning APIs">Data Provisioning APIs</option>
            <option value="Custom Platforms">Custom Platforms</option>
            <option value="POS Infrastructure">POS Infrastructure</option>
            <option value="Other">Other</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
            Project Details <span className="text-red-500">*</span>
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo/40 min-h-[150px]"
            placeholder="Tell us about your project and requirements..."
          />
        </div>
        
        <div className="flex justify-center pt-4">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="bg-navy hover:bg-indigo text-white px-8 py-6 text-lg rounded-md w-full md:w-auto min-w-[200px]"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Request'}
          </Button>
        </div>
      </form>
    </motion.div>
  );
};

export default RequestForm;
