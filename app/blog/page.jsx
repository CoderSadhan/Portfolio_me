'use client'

export default function Blog() {
  const blogPosts = [
    {
      title: 'Building AI-Powered Applications with Next.js',
      excerpt: 'Learn how to integrate AI capabilities into your Next.js applications using modern frameworks and APIs.',
      date: 'November 2025',
      readTime: '5 min read'
    },
    {
      title: 'Mastering Machine Learning with Python',
      excerpt: 'A comprehensive guide to understanding and implementing machine learning algorithms in Python.',
      date: 'October 2025',
      readTime: '8 min read'
    },
    {
      title: 'Frontend Development Best Practices',
      excerpt: 'Essential tips and techniques for building modern, responsive, and accessible web applications.',
      date: 'September 2025',
      readTime: '6 min read'
    },
    {
      title: 'Computer Vision with OpenCV and TensorFlow',
      excerpt: 'Exploring the world of computer vision through practical examples and real-world applications.',
      date: 'August 2025',
      readTime: '7 min read'
    }
  ]

  return (
    <section
      className="container"
      style={{
        padding: '4rem 0',
      }}
    >
      <div className="card" style={{ background: 'rgba(255,255,255,0.03)', borderRadius: 16, padding: 30 }}>
        <h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          style={{
            fontSize: '2.25rem',
            fontWeight: 600,
            color: '#06b6d4',
            marginBottom: '0.5rem',
          }}
        >
          📝 Blog
        </h2>
        <p className="text-gray-400 mb-10" style={{ color: '#94a3b8', marginBottom: '2.5rem' }}>
          Thoughts, tutorials, and insights on AI, development, and technology.
        </p>

        <div style={{ display: 'grid', gap: 20 }}>
          {blogPosts.map((post, idx) => (
            <article
              key={idx}
              style={{
                background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))',
                border: '1px solid rgba(0,255,255,0.1)',
                borderRadius: 16,
                padding: 24,
                boxShadow: '0 0 20px rgba(0,255,255,0.08)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,255,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(0,255,255,0.08)';
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 12 }}>
                <h3 style={{ fontSize: 20, color: '#0ea5e9', fontWeight: 600, marginBottom: 0 }}>
                  {post.title}
                </h3>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: '#94a3b8', background: 'rgba(0,255,255,0.05)', border: '1px solid rgba(0,255,255,0.1)', padding: '4px 8px', borderRadius: 12 }}>
                    {post.readTime}
                  </span>
                  <span style={{ fontSize: 12, color: '#94a3b8' }}>{post.date}</span>
                </div>
              </div>
              <p style={{ fontSize: 15, color: '#bbb', lineHeight: 1.6, marginBottom: 0 }}>
                {post.excerpt}
              </p>
              <div style={{ marginTop: 16, display: 'flex', gap: 12 }}>
                <button
                  style={{
                    background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
                    color: '#fff',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = 'linear-gradient(90deg, #0891b2, #06b6d4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Read More →
                </button>
                <button
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    color: '#0ea5e9',
                    border: '1px solid rgba(0,255,255,0.1)',
                    padding: '8px 16px',
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  Share
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
