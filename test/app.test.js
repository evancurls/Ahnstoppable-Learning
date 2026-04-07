import request from "supertest";
import app from "../app.js"; 
import { pool } from "../db.js";
import { jest } from "@jest/globals"; 

jest.spyOn(pool, "query");

describe("API Endpoints", () => {
  
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return a list of questions", async () => {
    const mockQuestions = [
      { id: 1, content: "What is Jest?", created_at: "2026-04-06" }
    ];
    
    // Tell the spy what to return for this specific test
    pool.query.mockResolvedValue({ rows: mockQuestions });

    const res = await request(app).get("/api/questions");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(mockQuestions);
    expect(pool.query).toHaveBeenCalledWith(
      expect.stringContaining("SELECT * FROM questions")
    );
  });

  it("should create a new question", async () => {
    const newQuestion = { id: 2, content: "New Question" };
    
    // Tell the spy to return our new question
    pool.query.mockResolvedValue({ rows: [newQuestion] });

    const res = await request(app)
      .post("/api/questions")
      .send({
        student_id: 1,
        class_id: 10,
        content: "New Question"
      });

    expect(res.statusCode).toEqual(201);
    expect(res.body.content).toBe("New Question");
  });

  it("should return a list of comments", async () => {
    const mockComments = [
      { id: 1, content: "Hello hello hello", created_at: "2026-04-06" }
    ];
    
    // Tell the spy what to return for this specific test
    pool.query.mockResolvedValue({ rows: mockComments });

    const res = await request(app).get("/api/comments");

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(mockComments);
    expect(pool.query).toHaveBeenCalledWith(
      expect.stringContaining("SELECT * FROM comments")
    );
  });

  it("should return questions for specific class and dates", async () => {
    const testClassID = "101";
    const testDate = "2026-04-07";
    const mockFilteredQuestions = [
      { id: 3, class_id: testClassID, content: "Parameter test question", created_at: testDate }
    ];
    
    // Tell the spy what to return for this specific test
    pool.query.mockResolvedValue({ rows: mockFilteredQuestions });

    const res = await request(app).get(`/api/questions/${testClassID}/${testDate}`);

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(mockFilteredQuestions);
    expect(pool.query).toHaveBeenCalledWith(
      expect.stringContaining("SELECT * FROM questions WHERE class_id = $1"),
      [testClassID, testDate]
    );
  });

  it("should return 404 for unknown routes", async () => {
    const res = await request(app).get("/api/undefined-route");
    expect(res.statusCode).toEqual(404);
    expect(res.body.error).toBe("Route not found");
  });

});