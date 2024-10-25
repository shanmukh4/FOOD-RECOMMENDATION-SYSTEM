import React, { useState } from 'react';
import './blog.css';

const blog = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: 'Shakuntala',
      imageUrl: 'https://files.oaiusercontent.com/file-l9RAzSRcC0GPUBB71CTwg0QV?se=2024-10-19T21%3A46%3A06Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D0b382d95-4dad-4a84-ae9a-e64df0c2a1a5.webp&sig=8hfVegWkDbQ2BuNzqPEVX6egKdRVcSJG41cupG7VVZ8%3D',
      caption: 'Enjoying the beach vibes!',
      description: ' This vibrant quinoa salad is a nutrient-packed powerhouse, perfect for a light lunch or dinner. Cooked quinoa forms the base, providing a complete protein source. Its mixed with creamy avocado, which adds healthy fats and a smooth texture, and protein-rich black beans for a satisfying crunch. Colorful bell peppers, red onions, and cherry tomatoes bring freshness and flavor, while a zesty lime vinaigrette ties everything together. Garnished with fresh cilantro and a sprinkle of feta cheese, this salad is not only delicious but also visually appealing, making it a perfect choice for health-conscious eaters.',
      likes: 450,
      comments: ['looks fine ', 'wow, thats a hit'],
    },
    {
      id: 2,
      username: 'Mary',
      imageUrl: 'https://files.oaiusercontent.com/file-ocR5k3hItk8lgQNBOi1CCd8E?se=2024-10-19T21%3A48%3A42Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D5e6a52bc-b5cb-49ef-b488-937c0bf10c39.webp&sig=c7XQocUZAdHkbcpLMOzy06yOWhWs7u6P7Q14G90SuZ8%3D',
      caption: 'Great day at the park!',
      description: 'This dish features marinated grilled chicken breast, infused with a blend of fresh herbs, lemon juice, and garlic for a burst of flavor. The chicken is grilled to perfection, ensuring it remains juicy and tender. Accompanied by steamed broccoli, rich in vitamins C and K, this meal is a great way to get your daily greens. The chicken is served with a light drizzle of balsamic glaze and a side of quinoa or brown rice for added fiber. This dish is not only healthy but also filling, making it an ideal option for a nourishing weeknight dinner.',
      likes: 500,
      comments: ['my turn to eat'],
    },
  ]);

  const [newPost, setNewPost] = useState({
    username: '',
    image: null, // Changed from imageUrl to image for file upload
    caption: '',
    description: '',
  });

  const [showForm, setShowForm] = useState(false);

  // Handle input changes for new post
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setNewPost((prevPost) => ({
      ...prevPost,
      [name]: files ? files[0] : value,
    }));
  };

  // Handle form submission for adding a new post
  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPost.username && newPost.image && newPost.caption && newPost.description) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPosts((prevPosts) => [
          ...prevPosts,
          {
            ...newPost,
            id: prevPosts.length + 1,
            imageUrl: reader.result, // Convert image file to URL
            likes: 0,
            comments: [],
          },
        ]);
      };
      reader.readAsDataURL(newPost.image); // Convert to base64 URL

      setNewPost({ username: '', image: null, caption: '', description: '' });
      setShowForm(false);
    } else {
      alert('Please fill out all fields.');
    }
  };

  // Handle "Like" button
  const handleLike = (id) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="blog">
      

      {/* Feed Section */}
      <div className="feed">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <div className="post-left">
              <img src={post.imageUrl} alt={post.caption} />
            </div>
            <div className="post-right">
              <h2>{post.username}</h2>
              <textarea className="description" readOnly value={post.description}></textarea>
              <h3>{post.caption}</h3>
              <div className="post-actions">
                <button onClick={() => handleLike(post.id)}>Like ({post.likes})</button>
                <button>Comment</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating "+" Button */}
      <button className="floating-btn" onClick={() => setShowForm(!showForm)}>
        +
      </button>

      {/* Post Form (Modal) */}
      {showForm && (
        <div className="modal-overlay">
          <div className="post-form">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={newPost.username}
                onChange={handleChange}
                required
              />
              <input
                type="file"
                name="image"
                accept="image/*" // Accept image files
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="caption"
                placeholder="Caption"
                value={newPost.caption}
                onChange={handleChange}
                required
              />
              <input
                className='desi'
                type="text"
                name="description"
                placeholder="Description"
                value={newPost.description}
                onChange={handleChange}
                required
              />
              <button type="submit">Post</button>
              <button type="button" onClick={() => setShowForm(false)}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default blog;
