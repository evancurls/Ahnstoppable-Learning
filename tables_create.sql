CREATE TABLE students (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    student_name TEXT NOT NULL, 
    class TEXT
);

CREATE TABLE questions (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    student_id INT REFERENCES students(id), --foreign key--
    time_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    questions TEXT
); 

CREATE TABLE comments (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    student_id INT REFERENCES students(id), --foreign key--
    time_date TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    question_id INT REFERENcES questions(id),
    comments TEXT
); 

CREATE TABLE classes (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    class TEXT, 
    student_id INT REFERENCES students(id), 
);