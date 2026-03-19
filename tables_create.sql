-- 1. Students Table (Just personal info)
CREATE TABLE students (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    google_id INT NOT NULL, 
    username TEXT NOT NULL, 
    password_hash TEXT NOT NULL, 
    email TEXT UNIQUE NOT NULL 
);

-- 2. Classes Table (Just class info)
CREATE TABLE classes (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    course_code VARCHAR(20) UNIQUE NOT NULL, -- e.g., 'CS101'
    course_name TEXT NOT NULL
);

-- 3. Enrollments (The "Bridge" table)
-- This links students to classes.
CREATE TABLE enrollments (
    student_id INT REFERENCES students(id) ON DELETE CASCADE,
    class_id INT REFERENCES classes(id) ON DELETE CASCADE,
    PRIMARY KEY (student_id, class_id)
);

-- 4. Questions Table
CREATE TABLE questions (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    student_id INT REFERENCES students(id) ON DELETE SET NULL,
    class_id INT REFERENCES classes(id) ON DELETE CASCADE, -- Link question to a class!
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
); 

-- 5. Comments Table
CREATE TABLE comments (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    question_id INT REFERENCES questions(id) ON DELETE CASCADE,
    student_id INT REFERENCES students(id) ON DELETE SET NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);