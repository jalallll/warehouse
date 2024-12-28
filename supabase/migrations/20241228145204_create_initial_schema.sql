-- Create a table for companies
CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);

-- Create a table for user profiles linked to companies
CREATE TABLE users (
    id UUID PRIMARY KEY REFERENCES auth.users (id),
    company_id INT REFERENCES companies (id) ON DELETE CASCADE,
    role TEXT CHECK (role IN ('admin', 'warehouse_worker', 'sales_rep')) NOT NULL,
    created_at TIMESTAMP DEFAULT NOW()
);
