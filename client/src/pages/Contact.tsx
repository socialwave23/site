import { Send, MapPin, Phone, Mail, Loader2, MessageCircle, ExternalLink } from 'lucide-react';
import { SiWhatsapp, SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactMessageSchema, type InsertContactMessage } from '@shared/schema';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const contactFormSchema = insertContactMessageSchema.extend({
  name: insertContactMessageSchema.shape.name,
  email: insertContactMessageSchema.shape.email,
  company: insertContactMessageSchema.shape.company,
  message: insertContactMessageSchema.shape.message,
});

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Messaggio inviato!",
        description: "Grazie per averci contattato. Ti risponderemo presto.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Errore",
        description: "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="flex flex-col bg-gray-50" data-testid="contact-page">
      <section className="relative pt-32 pb-16 bg-[#233DFF] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute right-0 top-0 w-1/2 h-1/2 bg-[#CAE8FF] rounded-full blur-3xl transform translate-x-1/4 -translate-y-1/4"></div>
          <div className="absolute left-0 bottom-0 w-1/3 h-1/3 bg-blue-800 rounded-full blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold mb-6">
              <MessageCircle className="w-4 h-4" />
              Contattaci
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black text-white mb-6" data-testid="contact-title">
              <span className="italic">Parliamo del</span><br />
              <span className="text-[#CAE8FF]">tuo progetto</span>
            </h1>
            <p className="text-xl text-white/90 max-w-xl mx-auto">
              Siamo pronti ad ascoltare la tua storia e a trasformarla in strategia.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Come possiamo aiutarti?</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
                  <div className="bg-[#CAE8FF] p-4 rounded-xl text-[#233DFF] flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Telefono</h3>
                    <a href="tel:+393497868504" className="text-gray-600 hover:text-[#233DFF] transition-colors" data-testid="contact-phone">349 786 8504</a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
                  <div className="bg-[#CAE8FF] p-4 rounded-xl text-[#233DFF] flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Email</h3>
                    <a href="mailto:social.wave23@gmail.com" className="text-gray-600 hover:text-[#233DFF] transition-colors" data-testid="contact-email">social.wave23@gmail.com</a>
                  </div>
                </div>

                <a 
                  href="https://wa.me/message/KMMS36SNMMFXK1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                  data-testid="contact-whatsapp"
                >
                  <div className="bg-green-100 p-4 rounded-xl text-green-600 flex-shrink-0">
                    <SiWhatsapp size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                      WhatsApp
                      <ExternalLink size={14} className="text-gray-400 group-hover:text-green-600 transition-colors" />
                    </h3>
                    <p className="text-gray-600 group-hover:text-green-600 transition-colors">Scrivici su WhatsApp</p>
                  </div>
                </a>

                <a 
                  href="https://www.instagram.com/socialwave_agency?igsh=MTFpNmVraDV0aTl2Yw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                  data-testid="contact-instagram"
                >
                  <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-4 rounded-xl text-pink-600 flex-shrink-0">
                    <SiInstagram size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
                      Instagram
                      <ExternalLink size={14} className="text-gray-400 group-hover:text-pink-600 transition-colors" />
                    </h3>
                    <p className="text-gray-600 group-hover:text-pink-600 transition-colors">@socialwave_agency</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm">
                  <div className="bg-[#CAE8FF] p-4 rounded-xl text-[#233DFF] flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Zona operativa</h3>
                    <p className="text-gray-600">Pisa e provincia</p>
                    <p className="text-gray-400 text-sm">Lavoriamo esclusivamente con attività locali</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Richiedi un preventivo gratuito</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6" data-testid="contact-form">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-bold text-gray-700">Nome *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field}
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#233DFF] focus:ring-2 focus:ring-[#CAE8FF]"
                              placeholder="Mario Rossi"
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-bold text-gray-700">Nome locale</FormLabel>
                          <FormControl>
                            <Input 
                              {...field}
                              value={field.value || ''}
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#233DFF] focus:ring-2 focus:ring-[#CAE8FF]"
                              placeholder="Es. Ristorante Da Mario"
                              data-testid="input-company"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold text-gray-700">Email *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            type="email"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#233DFF] focus:ring-2 focus:ring-[#CAE8FF]"
                            placeholder="mario@email.it"
                            data-testid="input-email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold text-gray-700">Messaggio *</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field}
                            rows={4}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#233DFF] focus:ring-2 focus:ring-[#CAE8FF] resize-none"
                            placeholder="Raccontaci del tuo locale e i tuoi obiettivi sui social..."
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full bg-[#233DFF] text-white font-bold py-6 rounded-xl shadow-lg transition-all hover:bg-[#1a2fc7] hover:shadow-xl flex justify-center items-center gap-2"
                    data-testid="button-submit"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        Invio in corso...
                      </>
                    ) : (
                      <>
                        Invia Messaggio <Send size={20} />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
