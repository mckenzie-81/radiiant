
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ArrowRight, CheckCircle } from 'lucide-react';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

// Form validation schema
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  // Define form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    },
  });

  // Form submission handler
  const onSubmit = (data: FormValues) => {
    setIsSubmitting(true);
    
    // Simulate API call delay
    setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
        variant: "default",
      });
      
      // Reset form after 2 seconds
      setTimeout(() => {
        form.reset();
        setIsSubmitted(false);
      }, 2000);
    }, 1500);
  };

  const formVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      variants={formVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="bg-white rounded-xl shadow-lg p-6 md:p-8 relative"
    >
      {!isSubmitted ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-navy">Full Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Enter your name" 
                        className="focus-within:border-indigo transition-all duration-300"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-navy">Business Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your@email.com" 
                        type="email"
                        className="focus-within:border-indigo transition-all duration-300"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy">Company Name (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your company" 
                          className="focus-within:border-indigo transition-all duration-300"
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-navy">Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your phone number" 
                          type="tel"
                          className="focus-within:border-indigo transition-all duration-300"
                          {...field} 
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </motion.div>
            </div>

            <motion.div variants={itemVariants}>
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-navy">How can we help?</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your project or question..." 
                        className="min-h-32 focus-within:border-indigo transition-all duration-300"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="pt-2"
            >
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full sm:w-auto relative overflow-hidden group"
                size="lg"
              >
                <span className="flex items-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <motion.div
                    animate={{ 
                      x: isSubmitting ? 10 : 0,
                      opacity: isSubmitting ? 0 : 1,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </span>
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              </Button>
            </motion.div>
          </form>
        </Form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              transition: { duration: 1, repeat: 1 }
            }}
          >
            <CheckCircle size={64} className="text-green-500 mb-4" />
          </motion.div>
          <h3 className="text-2xl font-display text-navy mb-2">Thank you!</h3>
          <p className="text-gray-700">Your message has been sent successfully.</p>
          <p className="text-gray-700 mt-1">We'll get back to you within 24 hours.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContactForm;
