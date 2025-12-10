-- Create table for ENT questions with AI responses
CREATE TABLE public.ent_questions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  question TEXT NOT NULL,
  ai_response TEXT,
  responded_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.ent_questions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert questions (public form)
CREATE POLICY "Anyone can submit questions" 
ON public.ent_questions 
FOR INSERT 
WITH CHECK (true);

-- Allow anyone to read questions (for displaying response)
CREATE POLICY "Anyone can read questions" 
ON public.ent_questions 
FOR SELECT 
USING (true);