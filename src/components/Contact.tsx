import { useState, type FormEvent, type ChangeEvent } from "react";
import { createClient } from "@supabase/supabase-js";
import { projectId, publicAnonKey } from "../utils/supabase/info";
import { Reveal } from "./Reveal";
import avatarImg from "../assets/avatar.jpg";

// Create Supabase client
const supabase = createClient(
  `https://${projectId}.supabase.co`,
  publicAnonKey
);

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      // Insert directly into the contact-form table
      const { data, error } = await supabase.from("contact-form").insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) {
        throw error;
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Failed to submit form"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
        <Reveal><h2 className="text-3xl md:text-4xl font-bold mb-12">Contact</h2></Reveal>

        <div className="print-contact space-y-1 text-base">
          <p>Email: favourmichael004@gmail.com</p>
          <p>LinkedIn: linkedin.com/in/favour-mfon-ab930b23b</p>
          <p>GitHub: github.com/obongdevid</p>
          <p>Live projects: dietpadi.com · app.dietpadi.com · eshspeaks.netlify.app · shoreline-demo.netlify.app</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Testimonial */}
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="text-6xl text-gray-300 dark:text-gray-600">"</div>
            <div>
              <img
                src={avatarImg}
                alt="Favour Mfon"
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 ring-4 ring-primary-button/30 transition-transform duration-300 hover:scale-110"
              />
              <p className="text-gray-600 dark:text-gray-400 italic max-w-md mx-auto leading-relaxed mb-4">
                Just say hi. I'm always open to discuss your project and take it
                to the next level
              </p>
              <p className="font-semibold text-foreground">Favour Mfon</p>
            </div>
            <div className="text-6xl text-gray-300 dark:text-gray-600">"</div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6">Let's work together</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Tell me about your project and I'll get back to you by email.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-button"
                  required
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-button"
                  required
                />
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project"
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-button resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-button hover:bg-primary-button/90 text-white py-3 rounded-lg font-semibold transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>
            </form>

            {submitStatus === "success" && (
              <p className="text-green-500 mt-4">
                Thanks! Your message has been sent.
              </p>
            )}

            {submitStatus === "error" && (
              <p className="text-red-500 mt-4">{errorMessage}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
