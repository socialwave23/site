import { Send, MapPin, Phone, Mail, Loader2 } from 'lucide-react';
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
    <div className="pt-24 pb-20 min-h-screen bg-white" data-testid="contact-page">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div>
            <h1 className="text-5xl font-black text-social-dark mb-6" data-testid="contact-title">
              Parliamo del tuo progetto.
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Siamo pronti ad ascoltare la tua storia e a trasformarla in strategia.
              Compila il form o vieni a trovarci.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-4 rounded-2xl text-social-blue flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-social-dark">Email</h3>
                  <p className="text-gray-600">info@socialwave.it</p>
                  <p className="text-gray-600">careers@socialwave.it</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-4 rounded-2xl text-social-blue flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-social-dark">Telefono</h3>
                  <p className="text-gray-600">+39 02 1234 5678</p>
                  <p className="text-gray-400 text-sm">Lun-Ven, 9:00 - 18:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-4 rounded-2xl text-social-blue flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-social-dark">Studio</h3>
                  <p className="text-gray-600">Via della Creatività, 42</p>
                  <p className="text-gray-600">20121 Milano (MI)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-10 rounded-3xl shadow-lg border border-gray-100">
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
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-social-blue focus:ring-2 focus:ring-blue-100"
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
                        <FormLabel className="text-sm font-bold text-gray-700">Azienda</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            value={field.value || ''}
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-social-blue focus:ring-2 focus:ring-blue-100"
                            placeholder="La tua Azienda Srl"
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
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-social-blue focus:ring-2 focus:ring-blue-100"
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
                          className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-social-blue focus:ring-2 focus:ring-blue-100 resize-none"
                          placeholder="Raccontaci i tuoi obiettivi..."
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
                  className="w-full bg-social-blue text-white font-bold py-6 rounded-xl shadow-lg transition-shadow hover:shadow-xl flex justify-center items-center gap-2"
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
    </div>
  );
}
