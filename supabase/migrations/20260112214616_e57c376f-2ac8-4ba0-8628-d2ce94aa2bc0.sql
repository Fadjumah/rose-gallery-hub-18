-- First create the update function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Add payment tracking columns to ent_questions table
ALTER TABLE public.ent_questions 
ADD COLUMN IF NOT EXISTS payment_status TEXT DEFAULT 'pending',
ADD COLUMN IF NOT EXISTS payment_reference TEXT,
ADD COLUMN IF NOT EXISTS payment_amount INTEGER DEFAULT 20000,
ADD COLUMN IF NOT EXISTS payment_phone TEXT,
ADD COLUMN IF NOT EXISTS payment_network TEXT;

-- Create payments table for detailed transaction tracking
CREATE TABLE IF NOT EXISTS public.payments (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  question_id UUID REFERENCES public.ent_questions(id) ON DELETE CASCADE,
  flw_ref TEXT,
  tx_ref TEXT NOT NULL UNIQUE,
  amount INTEGER NOT NULL DEFAULT 20000,
  currency TEXT NOT NULL DEFAULT 'UGX',
  status TEXT NOT NULL DEFAULT 'pending',
  payment_type TEXT,
  phone_number TEXT NOT NULL,
  webhook_payload JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on payments table
ALTER TABLE public.payments ENABLE ROW LEVEL SECURITY;

-- Create policies for payments table
CREATE POLICY "Anyone can view payments by tx_ref" 
ON public.payments 
FOR SELECT 
USING (true);

CREATE POLICY "Anyone can create payments" 
ON public.payments 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update payments" 
ON public.payments 
FOR UPDATE 
USING (true);

-- Create trigger for automatic timestamp updates on payments
CREATE TRIGGER update_payments_updated_at
BEFORE UPDATE ON public.payments
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Add indexes for faster lookups
CREATE INDEX IF NOT EXISTS idx_payments_tx_ref ON public.payments(tx_ref);
CREATE INDEX IF NOT EXISTS idx_payments_question_id ON public.payments(question_id);
CREATE INDEX IF NOT EXISTS idx_payments_status ON public.payments(status);