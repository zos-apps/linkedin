import React, { useState } from 'react';

interface LinkedInProps {
  onClose: () => void;
}

interface Post {
  id: string;
  author: string;
  role: string;
  avatar: string;
  content: string;
  likes: number;
  comments: number;
  time: string;
}

const mockPosts: Post[] = [
  { id: '1', author: 'Sarah Chen', role: 'VP Engineering at TechCorp', avatar: '👩‍💼', content: 'Excited to announce our team just shipped a major feature! So proud of everyone involved. #engineering #teamwork', likes: 234, comments: 45, time: '2h' },
  { id: '2', author: 'Marcus Johnson', role: 'Founder & CEO at StartupX', avatar: '👨‍💻', content: 'Just closed our Series A! Looking forward to scaling the team. DMs are open for senior engineers. 🚀', likes: 892, comments: 127, time: '5h' },
  { id: '3', author: 'Emily Rodriguez', role: 'Product Manager at BigTech', avatar: '👩‍🎓', content: '5 lessons I learned after 10 years in product:\n\n1. Listen more than you speak\n2. Data informs, it doesn\'t decide\n3. Build relationships first\n4. Ship fast, iterate faster\n5. Stay curious', likes: 1247, comments: 89, time: '1d' },
];

const LinkedIn: React.FC<LinkedInProps> = ({ onClose }) => {
  const [posts] = useState(mockPosts);
  const [tab, setTab] = useState<'feed' | 'network' | 'jobs' | 'messages'>('feed');

  return (
    <div className="h-full flex flex-col bg-[#f3f2ef]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 py-2">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-[#0a66c2]">in</span>
            <input
              type="text"
              placeholder="Search"
              className="px-3 py-1.5 bg-[#eef3f8] rounded text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#0a66c2]"
            />
          </div>
          <div className="flex items-center gap-6">
            {(['feed', 'network', 'jobs', 'messages'] as const).map(t => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex flex-col items-center text-xs transition-colors
                  ${tab === t ? 'text-[#0a66c2]' : 'text-gray-500 hover:text-gray-700'}
                `}
              >
                <span className="text-xl mb-0.5">
                  {t === 'feed' ? '🏠' : t === 'network' ? '👥' : t === 'jobs' ? '💼' : '💬'}
                </span>
                <span className="capitalize">{t === 'feed' ? 'Home' : t}</span>
              </button>
            ))}
            <div className="w-8 h-8 rounded-full bg-[#0a66c2] text-white flex items-center justify-center">
              Z
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-2xl mx-auto py-4 px-4">
          {/* Create Post */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0a66c2] text-white flex items-center justify-center text-xl">
                Z
              </div>
              <button className="flex-1 text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-500 text-sm transition-colors">
                Start a post
              </button>
            </div>
            <div className="flex justify-around mt-3 pt-2 border-t border-gray-100">
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded transition-colors text-sm text-gray-600">
                📷 Photo
              </button>
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded transition-colors text-sm text-gray-600">
                🎥 Video
              </button>
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded transition-colors text-sm text-gray-600">
                📅 Event
              </button>
            </div>
          </div>

          {/* Posts */}
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg border border-gray-200 mb-4">
              <div className="p-4">
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-2xl">
                    {post.avatar}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{post.author}</div>
                    <div className="text-xs text-gray-500">{post.role}</div>
                    <div className="text-xs text-gray-400">{post.time}</div>
                  </div>
                </div>
                <p className="mt-3 text-gray-800 whitespace-pre-line">{post.content}</p>
              </div>
              <div className="px-4 py-2 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
                <span>👍 {post.likes} • 💬 {post.comments} comments</span>
              </div>
              <div className="px-4 py-2 border-t border-gray-100 flex justify-around">
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded transition-colors text-sm text-gray-600">
                  👍 Like
                </button>
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded transition-colors text-sm text-gray-600">
                  💬 Comment
                </button>
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded transition-colors text-sm text-gray-600">
                  🔄 Repost
                </button>
                <button className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded transition-colors text-sm text-gray-600">
                  📤 Send
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LinkedIn;
