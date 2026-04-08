const samplePost = [{
  id: "abc123",
  content: "What is the difference between props and state?",
  createdAt: "2026-04-07T14:30:00Z",
  author: {
    id: "user456",
    name: "Prof. Smith",
  },
  comments: [
    {
      id: "cmt1",
      content: "Props are passed from parent to child...",
      createdAt: "2026-04-07T14:35:00Z",
      likes: 3,
      author: {
        id: "user789",
        name: "Anonymous",
      },
      replies: [
        {
          id: "rep1",
          content: "Great explanation!",
          createdAt: "2026-04-07T14:40:00Z",
          author: {
            id: "user101",
            name: "Anonymous",
          },
        }
      ]
    }
  ]
}]

export default samplePost;