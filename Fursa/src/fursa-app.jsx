import React, { useState } from 'react';
import { Briefcase, Users, User, Send, Search, Zap, MessageCircle, Star, TrendingUp, MapPin, Clock, DollarSign, X, ChevronRight, Sparkles, CheckCircle2, ExternalLink, QrCode, Bookmark, BookmarkCheck, Calendar, Users2, Video, Globe } from 'lucide-react';

// Mock data
const mockJobs = [
  {
    id: 1,
    title: "UI/UX Designer for Mobile App",
    company: "TechStart Kenya",
    location: "Remote",
    type: "Contract",
    budget: "$800 - $1,500",
    posted: "2 hours ago",
    match: 94,
    description: "Looking for a talented UI/UX designer to redesign our mobile banking app. Must have experience with fintech and mobile-first design.",
    skills: ["Figma", "Mobile Design", "Prototyping", "User Research"],
    aiInsight: "Your portfolio shows 3 mobile banking projects that perfectly match this requirement. Your Safaricom redesign is exactly what they need."
  },
  {
    id: 2,
    title: "Video Editor - Social Media Content",
    company: "Creative Agency Nairobi",
    location: "Nairobi",
    type: "Part-time",
    budget: "$500/month",
    posted: "5 hours ago",
    match: 87,
    description: "Edit short-form content for Instagram, TikTok, and YouTube. Must be fast, creative, and understand trending formats.",
    skills: ["Video Editing", "After Effects", "Social Media", "Motion Graphics"],
    aiInsight: "Your viral TikTok edits and Instagram reels showcase exactly the style they're looking for."
  },
  {
    id: 3,
    title: "Full Stack Developer - E-commerce Platform",
    company: "ShopHub Africa",
    location: "Remote",
    type: "Full-time",
    budget: "$2,000 - $3,500",
    posted: "1 day ago",
    match: 91,
    description: "Build and maintain our e-commerce platform. React, Node.js, PostgreSQL experience required.",
    skills: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    aiInsight: "Your M-Pesa integration project and React e-commerce work are strong matches. Highlight your payment system experience."
  },
  {
    id: 4,
    title: "Graphic Designer - Brand Identity",
    company: "Bloom Cosmetics",
    location: "Lagos, Nigeria",
    type: "Project",
    budget: "$600 - $1,000",
    posted: "3 hours ago",
    match: 78,
    description: "Create complete brand identity for new cosmetics line. Logo, packaging, social media templates.",
    skills: ["Brand Design", "Illustrator", "Packaging Design"],
    aiInsight: "Your beauty brand portfolio is relevant, but consider adding more packaging design samples."
  },
  {
    id: 5,
    title: "Content Writer - Tech Blog",
    company: "African Tech News",
    location: "Remote",
    type: "Freelance",
    budget: "$0.10/word",
    posted: "6 hours ago",
    match: 82,
    description: "Write weekly articles about African tech ecosystem, startups, and innovation.",
    skills: ["Technical Writing", "SEO", "Research", "Tech Knowledge"],
    aiInsight: "Your Medium articles on fintech match their style. Your startup interview pieces are perfect examples."
  }
];

const mockTalent = [
  {
    id: 1,
    name: "Amara Okafor",
    title: "Product Designer",
    location: "Lagos, Nigeria",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amara",
    skills: ["UI/UX", "Figma", "Design Systems"],
    portfolio: ["Mobile Banking App", "E-commerce Platform", "Fintech Dashboard"],
    rating: 4.9,
    projects: 23,
    videoIntro: true
  },
  {
    id: 2,
    name: "David Mensah",
    title: "Full Stack Developer",
    location: "Accra, Ghana",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    skills: ["React", "Node.js", "AWS"],
    portfolio: ["Payment Gateway", "SaaS Platform", "Mobile App Backend"],
    rating: 4.8,
    projects: 31,
    videoIntro: true
  },
  {
    id: 3,
    name: "Zawadi Kimani",
    title: "Motion Designer",
    location: "Nairobi, Kenya",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zawadi",
    skills: ["After Effects", "3D Animation", "Video Editing"],
    portfolio: ["Brand Animations", "Social Media Content", "Explainer Videos"],
    rating: 5.0,
    projects: 18,
    videoIntro: true
  },
  {
    id: 4,
    name: "Ibrahim Hassan",
    title: "Content Strategist",
    location: "Kigali, Rwanda",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ibrahim",
    skills: ["SEO", "Copywriting", "Brand Strategy"],
    portfolio: ["Tech Blog", "Startup Messaging", "Social Campaigns"],
    rating: 4.7,
    projects: 27,
    videoIntro: false
  }
];

const mockEvents = [
  {
    id: 1,
    title: "East Africa Tech Summit 2026",
    type: "Conference",
    format: "In-Person",
    date: "Feb 15-16, 2026",
    time: "9:00 AM - 6:00 PM",
    location: "KICC, Nairobi",
    attendees: 500,
    match: 96,
    price: "Free",
    organizer: "Tech Hub Africa",
    description: "Join 500+ tech professionals, founders, and investors for East Africa's largest tech conference. Network, learn, and discover opportunities.",
    topics: ["Tech", "Networking", "Startups", "Innovation"],
    speakers: ["Dr. Bitange Ndemo", "Ory Okolloh", "Juliana Rotich"],
    aiInsight: "Perfect match! This event focuses on tech innovation and has 3 design workshops that align with your portfolio."
  },
  {
    id: 2,
    title: "Freelancer's Masterclass: Building Your Brand",
    type: "Workshop",
    format: "Virtual",
    date: "Feb 8, 2026",
    time: "2:00 PM - 5:00 PM",
    location: "Online (Zoom)",
    attendees: 150,
    match: 91,
    price: "$25",
    organizer: "Freelance Africa",
    description: "Learn how to position yourself, price your services, and attract high-value clients as a freelancer.",
    topics: ["Freelancing", "Personal Branding", "Pricing", "Client Management"],
    speakers: ["Sarah Muthoni", "James Karanja"],
    aiInsight: "Based on your freelance work history, this will help you level up your client acquisition skills."
  },
  {
    id: 3,
    title: "UI/UX Design Meetup Nairobi",
    type: "Meetup",
    format: "In-Person",
    date: "Feb 10, 2026",
    time: "6:00 PM - 9:00 PM",
    location: "iHub, Nairobi",
    attendees: 80,
    match: 88,
    price: "Free",
    organizer: "Design Nairobi",
    description: "Monthly meetup for designers to share work, get feedback, and network. Portfolio reviews, lightning talks, and networking.",
    topics: ["UI/UX", "Design", "Portfolio Review", "Networking"],
    speakers: ["Community-driven"],
    aiInsight: "Great for portfolio feedback! Your mobile banking designs would get valuable insights here."
  },
  {
    id: 4,
    title: "African Creatives Festival",
    type: "Festival",
    format: "Hybrid",
    date: "Feb 20-22, 2026",
    time: "All Day",
    location: "Lagos & Online",
    attendees: 1200,
    match: 85,
    price: "$50 (In-Person) / $15 (Virtual)",
    organizer: "Creatives Hub",
    description: "Celebrate African creativity! Workshops, exhibitions, networking, and opportunities to collaborate with brands.",
    topics: ["Creative Arts", "Music", "Design", "Film", "Photography"],
    speakers: ["Various Artists & Creators"],
    aiInsight: "Your video editing and motion design skills match 5 workshops at this event."
  },
  {
    id: 5,
    title: "Women in Tech Networking Brunch",
    type: "Networking",
    format: "In-Person",
    date: "Feb 12, 2026",
    time: "10:00 AM - 1:00 PM",
    location: "The Alchemist, Nairobi",
    attendees: 60,
    match: 79,
    price: "KSh 1,500",
    organizer: "WiT Kenya",
    description: "Monthly brunch for women in tech to connect, share experiences, and build meaningful relationships.",
    topics: ["Networking", "Women in Tech", "Career Growth", "Mentorship"],
    speakers: ["Panel Discussion"],
    aiInsight: "Connect with other women professionals in your field. Past attendees have formed successful partnerships."
  },
  {
    id: 6,
    title: "Blockchain & Web3 for Beginners",
    type: "Workshop",
    format: "Virtual",
    date: "Feb 14, 2026",
    time: "3:00 PM - 6:00 PM",
    location: "Online (Google Meet)",
    attendees: 200,
    match: 73,
    price: "Free",
    organizer: "Crypto Kenya",
    description: "Learn the fundamentals of blockchain technology, smart contracts, and how to get started in Web3.",
    topics: ["Blockchain", "Web3", "Cryptocurrency", "NFTs"],
    speakers: ["Victor Asemota", "Web3 Developers"],
    aiInsight: "Emerging tech opportunity. Good for expanding your skill set into new markets."
  }
];

const FursaApp = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedTalent, setSelectedTalent] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(null);
  const [appliedJobs, setAppliedJobs] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [savedTalents, setSavedTalents] = useState(new Set());
  const [showQR, setShowQR] = useState(false);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState(new Set());

  const handleAIApply = (job) => {
    setShowApplyModal(job);
    setTimeout(() => {
      setAppliedJobs(new Set([...appliedJobs, job.id]));
      setShowApplyModal(null);
      setSelectedJob(null);
    }, 2500);
  };

  const handleSaveTalent = (talentId) => {
    const newSaved = new Set(savedTalents);
    if (newSaved.has(talentId)) {
      newSaved.delete(talentId);
    } else {
      newSaved.add(talentId);
      setShowSaveSuccess(true);
      setTimeout(() => setShowSaveSuccess(false), 2000);
    }
    setSavedTalents(newSaved);
  };

  const handleRegisterEvent = (eventId) => {
    const newRegistered = new Set(registeredEvents);
    newRegistered.add(eventId);
    setRegisteredEvents(newRegistered);
    setTimeout(() => {
      setSelectedEvent(null);
    }, 2000);
  };

  const JobCard = ({ job }) => (
    <div 
      onClick={() => setSelectedJob(job)}
      className="job-card"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: '20px',
        padding: '24px',
        marginBottom: '16px',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
      }}
    >
      {/* AI Match Badge */}
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        background: job.match >= 90 ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 
                    job.match >= 80 ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' :
                    'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        color: 'white',
        padding: '6px 14px',
        borderRadius: '100px',
        fontSize: '13px',
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}>
        <Sparkles size={14} />
        {job.match}% Match
      </div>

      <div style={{ marginTop: '8px' }}>
        <h3 style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#0f172a',
          marginBottom: '8px',
          lineHeight: '1.3',
          fontFamily: '"DM Sans", sans-serif'
        }}>
          {job.title}
        </h3>
        
        <div style={{
          fontSize: '15px',
          color: '#64748b',
          fontWeight: '600',
          marginBottom: '16px'
        }}>
          {job.company}
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '16px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#475569',
            fontSize: '14px'
          }}>
            <MapPin size={16} />
            {job.location}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#475569',
            fontSize: '14px'
          }}>
            <DollarSign size={16} />
            {job.budget}
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#475569',
            fontSize: '14px'
          }}>
            <Clock size={16} />
            {job.posted}
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          {job.skills.slice(0, 3).map((skill, idx) => (
            <span key={idx} style={{
              background: 'rgba(59, 130, 246, 0.1)',
              color: '#2563eb',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '600'
            }}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  const TalentCard = ({ talent }) => (
    <div 
      onClick={() => setSelectedTalent(talent)}
      className="talent-card"
      style={{
        background: 'white',
        borderRadius: '20px',
        padding: '20px',
        marginBottom: '16px',
        cursor: 'pointer',
        border: '1px solid rgba(0,0,0,0.06)',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
      }}
    >
      {/* Save Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleSaveTalent(talent.id);
        }}
        style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          background: savedTalents.has(talent.id) ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' : 'rgba(0,0,0,0.05)',
          border: 'none',
          borderRadius: '12px',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          transition: 'all 0.3s',
          boxShadow: savedTalents.has(talent.id) ? '0 4px 12px rgba(59, 130, 246, 0.3)' : 'none'
        }}
      >
        {savedTalents.has(talent.id) ? (
          <BookmarkCheck size={20} color="white" />
        ) : (
          <Bookmark size={20} color="#64748b" />
        )}
      </button>

      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
        <img 
          src={talent.avatar} 
          alt={talent.name}
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            border: '3px solid #e0f2fe'
          }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#0f172a',
              fontFamily: '"DM Sans", sans-serif'
            }}>
              {talent.name}
            </h3>
            {talent.videoIntro && (
              <div style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
                color: 'white',
                padding: '3px 8px',
                borderRadius: '6px',
                fontSize: '11px',
                fontWeight: '700'
              }}>
                VIDEO
              </div>
            )}
          </div>
          
          <div style={{ color: '#64748b', fontSize: '14px', marginBottom: '12px' }}>
            {talent.title} • {talent.location}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Star size={16} fill="#fbbf24" color="#fbbf24" />
              <span style={{ fontSize: '14px', fontWeight: '700', color: '#0f172a' }}>
                {talent.rating}
              </span>
            </div>
            <div style={{ fontSize: '14px', color: '#64748b' }}>
              {talent.projects} projects
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {talent.skills.map((skill, idx) => (
              <span key={idx} style={{
                background: 'rgba(139, 92, 246, 0.1)',
                color: '#7c3aed',
                padding: '4px 10px',
                borderRadius: '6px',
                fontSize: '12px',
                fontWeight: '600'
              }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const EventCard = ({ event }) => (
    <div 
      onClick={() => setSelectedEvent(event)}
      className="event-card"
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.98) 100%)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(0,0,0,0.06)',
        borderRadius: '20px',
        padding: '24px',
        marginBottom: '16px',
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.12)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.05)';
      }}
    >
      {/* AI Match Badge */}
      <div style={{
        position: 'absolute',
        top: '16px',
        right: '16px',
        background: event.match >= 90 ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 
                    event.match >= 80 ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' :
                    'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
        color: 'white',
        padding: '6px 14px',
        borderRadius: '100px',
        fontSize: '13px',
        fontWeight: '700',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
      }}>
        <Sparkles size={14} />
        {event.match}% Match
      </div>

      {/* Event Type Badge */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        background: event.type === 'Conference' ? 'rgba(59, 130, 246, 0.1)' :
                    event.type === 'Workshop' ? 'rgba(139, 92, 246, 0.1)' :
                    event.type === 'Meetup' ? 'rgba(236, 72, 153, 0.1)' :
                    event.type === 'Festival' ? 'rgba(245, 158, 11, 0.1)' :
                    'rgba(16, 185, 129, 0.1)',
        color: event.type === 'Conference' ? '#2563eb' :
               event.type === 'Workshop' ? '#7c3aed' :
               event.type === 'Meetup' ? '#db2777' :
               event.type === 'Festival' ? '#d97706' :
               '#059669',
        padding: '4px 10px',
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '700',
        marginBottom: '12px'
      }}>
        <Calendar size={12} />
        {event.type}
      </div>

      <h3 style={{
        fontSize: '20px',
        fontWeight: '700',
        color: '#0f172a',
        marginBottom: '8px',
        lineHeight: '1.3',
        fontFamily: '"DM Sans", sans-serif'
      }}>
        {event.title}
      </h3>

      <div style={{
        fontSize: '14px',
        color: '#64748b',
        fontWeight: '600',
        marginBottom: '16px'
      }}>
        {event.organizer}
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        marginBottom: '16px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#475569',
          fontSize: '14px'
        }}>
          <Calendar size={16} />
          {event.date}
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#475569',
          fontSize: '14px'
        }}>
          {event.format === 'Virtual' ? <Video size={16} /> : 
           event.format === 'Hybrid' ? <Globe size={16} /> :
           <MapPin size={16} />}
          {event.format}
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          color: '#475569',
          fontSize: '14px'
        }}>
          <Users2 size={16} />
          {event.attendees} attending
        </div>
      </div>

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '12px'
      }}>
        {event.topics.slice(0, 3).map((topic, idx) => (
          <span key={idx} style={{
            background: 'rgba(139, 92, 246, 0.1)',
            color: '#7c3aed',
            padding: '6px 12px',
            borderRadius: '8px',
            fontSize: '13px',
            fontWeight: '600'
          }}>
            {topic}
          </span>
        ))}
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '12px',
        borderTop: '1px solid rgba(0,0,0,0.06)'
      }}>
        <span style={{
          fontSize: '16px',
          fontWeight: '700',
          color: event.price === 'Free' ? '#10b981' : '#0f172a'
        }}>
          {event.price}
        </span>
        {registeredEvents.has(event.id) && (
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            color: '#10b981',
            fontSize: '14px',
            fontWeight: '700'
          }}>
            <CheckCircle2 size={16} />
            Registered
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
      fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated Background Elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '5%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 20s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '5%',
        width: '350px',
        height: '350px',
        background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 25s ease-in-out infinite reverse'
      }} />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(30px, 30px); }
        }
        
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&family=Inter:wght@400;500;600;700&display=swap');
        
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
      `}</style>

      {/* Header */}
      <div style={{
        background: 'rgba(15, 23, 42, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        padding: '20px',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4)'
            }}>
              <Zap size={24} color="white" fill="white" />
            </div>
            <h1 style={{
              fontSize: '28px',
              fontWeight: '900',
              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontFamily: '"DM Sans", sans-serif',
              letterSpacing: '-0.02em'
            }}>
              Fursa
            </h1>
          </div>
          
          <div style={{
            background: 'rgba(255,255,255,0.1)',
            borderRadius: '12px',
            padding: '10px 20px',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Sparkles size={16} />
            AI-Powered
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '24px 20px 100px',
        position: 'relative',
        zIndex: 1
      }}>
        {/* Search Bar */}
        <div style={{
          background: 'rgba(255,255,255,0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: '20px',
          padding: '16px 20px',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          border: '1px solid rgba(0,0,0,0.06)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.08)'
        }}>
          <Search size={20} color="#64748b" />
          <input 
            type="text"
            placeholder={activeTab === 'jobs' ? "Search jobs, skills, companies..." : 
                        activeTab === 'events' ? "Search events, workshops, topics..." :
                        "Search designers, developers, creators..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '16px',
              color: '#0f172a',
              background: 'transparent',
              fontWeight: '500'
            }}
          />
        </div>

        {/* Content Area */}
        {activeTab === 'jobs' ? (
          <div>
            <div style={{
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '800',
                color: 'white',
                fontFamily: '"DM Sans", sans-serif'
              }}>
                AI-Matched Jobs
              </h2>
              <div style={{
                background: 'rgba(59, 130, 246, 0.2)',
                color: '#60a5fa',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '700'
              }}>
                {mockJobs.length} opportunities
              </div>
            </div>
            
            {mockJobs.map(job => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : activeTab === 'talent' ? (
          <div>
            <div style={{
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '800',
                color: 'white',
                fontFamily: '"DM Sans", sans-serif'
              }}>
                Top Talent
              </h2>
              <div style={{
                background: 'rgba(139, 92, 246, 0.2)',
                color: '#c4b5fd',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '700'
              }}>
                {mockTalent.length} creators
              </div>
            </div>
            
            {mockTalent.map(talent => (
              <TalentCard key={talent.id} talent={talent} />
            ))}
          </div>
        ) : activeTab === 'events' ? (
          <div>
            <div style={{
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: '800',
                color: 'white',
                fontFamily: '"DM Sans", sans-serif'
              }}>
                Events & Workshops
              </h2>
              <div style={{
                background: 'rgba(236, 72, 153, 0.2)',
                color: '#fbcfe8',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: '700'
              }}>
                {mockEvents.length} upcoming
              </div>
            </div>
            
            {mockEvents.map(event => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div style={{
            background: 'rgba(255,255,255,0.95)',
            borderRadius: '24px',
            padding: '40px',
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              boxShadow: '0 12px 40px rgba(59, 130, 246, 0.3)'
            }}>
              <User size={40} color="white" />
            </div>
            
            <h2 style={{
              fontSize: '28px',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '12px',
              fontFamily: '"DM Sans", sans-serif',
              textAlign: 'center'
            }}>
              Your Portfolio
            </h2>
            
            <p style={{
              fontSize: '16px',
              color: '#64748b',
              marginBottom: '32px',
              lineHeight: '1.6',
              textAlign: 'center'
            }}>
              Build your portfolio in 5 minutes. Upload work, record intro, get discovered.
            </p>

            {/* QR Code Button */}
            <button
              onClick={() => setShowQR(!showQR)}
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '16px',
                padding: '18px',
                fontSize: '16px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)',
                transition: 'all 0.3s',
                marginBottom: '32px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 12px 32px rgba(16, 185, 129, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.3)';
              }}>
              <QrCode size={22} />
              {showQR ? 'Hide QR Code' : 'Show QR Code for Networking'}
            </button>

            {/* QR Code Display */}
            {showQR && (
              <div style={{
                background: 'white',
                border: '2px solid rgba(16, 185, 129, 0.2)',
                borderRadius: '20px',
                padding: '32px',
                marginBottom: '32px',
                textAlign: 'center',
                animation: 'slideDown 0.3s ease-out'
              }}>
                <style>{`
                  @keyframes slideDown {
                    from { opacity: 0; transform: translateY(-20px); }
                    to { opacity: 1; transform: translateY(0); }
                  }
                `}</style>
                
                {/* Simple QR Code placeholder - in production, use a real QR generator */}
                <div style={{
                  width: '200px',
                  height: '200px',
                  margin: '0 auto 20px',
                  background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%23000'/%3E%3Crect x='10' y='10' width='15' height='15' fill='%23fff'/%3E%3Crect x='35' y='10' width='15' height='15' fill='%23fff'/%3E%3Crect x='60' y='10' width='15' height='15' fill='%23fff'/%3E%3Crect x='10' y='35' width='15' height='15' fill='%23fff'/%3E%3Crect x='60' y='35' width='15' height='15' fill='%23fff'/%3E%3Crect x='10' y='60' width='15' height='15' fill='%23fff'/%3E%3Crect x='35' y='60' width='15' height='15' fill='%23fff'/%3E%3Crect x='60' y='60' width='15' height='15' fill='%23fff'/%3E%3C/svg%3E")`,
                  backgroundSize: 'cover',
                  borderRadius: '12px'
                }} />
                
                <div style={{
                  fontSize: '14px',
                  color: '#10b981',
                  fontWeight: '700',
                  marginBottom: '8px'
                }}>
                  fursa.app/yourname
                </div>
                <div style={{
                  fontSize: '13px',
                  color: '#64748b'
                }}>
                  Let others scan to view your portfolio
                </div>
              </div>
            )}

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}>
              <div style={{
                background: 'rgba(59, 130, 246, 0.05)',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '32px', fontWeight: '900', color: '#3b82f6', marginBottom: '8px' }}>
                  {appliedJobs.size}
                </div>
                <div style={{ fontSize: '14px', color: '#64748b', fontWeight: '600' }}>
                  Applications Sent
                </div>
              </div>
              
              <div style={{
                background: 'rgba(139, 92, 246, 0.05)',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '32px', fontWeight: '900', color: '#8b5cf6', marginBottom: '8px' }}>
                  156
                </div>
                <div style={{ fontSize: '14px', color: '#64748b', fontWeight: '600' }}>
                  Profile Views
                </div>
              </div>
              
              <div style={{
                background: 'rgba(16, 185, 129, 0.05)',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center'
              }}>
                <div style={{ fontSize: '32px', fontWeight: '900', color: '#10b981', marginBottom: '8px' }}>
                  8
                </div>
                <div style={{ fontSize: '14px', color: '#64748b', fontWeight: '600' }}>
                  New Messages
                </div>
              </div>
            </div>

            {/* Saved Talents Section */}
            {savedTalents.size > 0 && (
              <div style={{
                marginBottom: '24px'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '16px'
                }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: '#0f172a',
                    fontFamily: '"DM Sans", sans-serif'
                  }}>
                    Saved Contacts
                  </h3>
                  <div style={{
                    background: 'rgba(59, 130, 246, 0.1)',
                    color: '#3b82f6',
                    padding: '4px 12px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: '700'
                  }}>
                    {savedTalents.size}
                  </div>
                </div>
                
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '16px',
                  border: '1px solid rgba(0,0,0,0.06)'
                }}>
                  {mockTalent.filter(t => savedTalents.has(t.id)).map((talent, idx) => (
                    <div 
                      key={talent.id}
                      onClick={() => setSelectedTalent(talent)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        padding: '12px',
                        borderRadius: '12px',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        borderBottom: idx < mockTalent.filter(t => savedTalents.has(t.id)).length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none',
                        marginBottom: idx < mockTalent.filter(t => savedTalents.has(t.id)).length - 1 ? '8px' : '0'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(59, 130, 246, 0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <img 
                        src={talent.avatar} 
                        alt={talent.name}
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          border: '2px solid #e0f2fe'
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <div style={{
                          fontSize: '15px',
                          fontWeight: '700',
                          color: '#0f172a',
                          marginBottom: '2px'
                        }}>
                          {talent.name}
                        </div>
                        <div style={{
                          fontSize: '13px',
                          color: '#64748b'
                        }}>
                          {talent.title}
                        </div>
                      </div>
                      <ChevronRight size={18} color="#64748b" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            <button style={{
              width: '100%',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '16px 32px',
              fontSize: '16px',
              fontWeight: '700',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(59, 130, 246, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.3)';
            }}>
              Complete Your Profile
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(15, 23, 42, 0.95)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        padding: '12px 20px',
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '8px'
        }}>
          {[
            { id: 'jobs', icon: Briefcase, label: 'Jobs' },
            { id: 'talent', icon: Users, label: 'Talent' },
            { id: 'events', icon: Calendar, label: 'Events' },
            { id: 'profile', icon: User, label: 'Me' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                background: activeTab === tab.id 
                  ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                  : 'transparent',
                color: activeTab === tab.id ? 'white' : 'rgba(255,255,255,0.6)',
                border: 'none',
                borderRadius: '12px',
                padding: '12px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '4px',
                transition: 'all 0.3s',
                fontWeight: '700',
                fontSize: '12px',
                boxShadow: activeTab === tab.id ? '0 4px 16px rgba(59, 130, 246, 0.3)' : 'none'
              }}
            >
              <tab.icon size={24} />
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Job Detail Modal */}
      {selectedJob && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'flex-end',
          animation: 'fadeIn 0.3s ease-out'
        }}
        onClick={() => setSelectedJob(null)}>
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; }
              to { opacity: 1; }
            }
            @keyframes slideUp {
              from { transform: translateY(100%); }
              to { transform: translateY(0); }
            }
          `}</style>
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '24px 24px 0 0',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '32px 24px',
              animation: 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
            {/* Close button */}
            <button 
              onClick={() => setSelectedJob(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(0,0,0,0.05)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
              <X size={20} />
            </button>

            {/* AI Match Badge */}
            <div style={{
              background: selectedJob.match >= 90 ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 
                          selectedJob.match >= 80 ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' :
                          'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px'
            }}>
              <Sparkles size={16} />
              {selectedJob.match}% Perfect Match
            </div>

            <h2 style={{
              fontSize: '28px',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '12px',
              fontFamily: '"DM Sans", sans-serif',
              lineHeight: '1.2'
            }}>
              {selectedJob.title}
            </h2>

            <div style={{
              fontSize: '18px',
              color: '#64748b',
              fontWeight: '600',
              marginBottom: '24px'
            }}>
              {selectedJob.company}
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '24px',
              paddingBottom: '24px',
              borderBottom: '1px solid rgba(0,0,0,0.06)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#475569',
                fontSize: '15px',
                fontWeight: '600'
              }}>
                <MapPin size={18} />
                {selectedJob.location}
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#475569',
                fontSize: '15px',
                fontWeight: '600'
              }}>
                <DollarSign size={18} />
                {selectedJob.budget}
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#475569',
                fontSize: '15px',
                fontWeight: '600'
              }}>
                <Clock size={18} />
                {selectedJob.posted}
              </div>
            </div>

            {/* AI Insight */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '24px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px'
              }}>
                <Sparkles size={18} color="#3b82f6" />
                <span style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#3b82f6',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  AI Insight
                </span>
              </div>
              <p style={{
                fontSize: '15px',
                color: '#475569',
                lineHeight: '1.6',
                fontWeight: '500'
              }}>
                {selectedJob.aiInsight}
              </p>
            </div>

            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '12px'
            }}>
              Description
            </h3>
            
            <p style={{
              fontSize: '15px',
              color: '#475569',
              lineHeight: '1.7',
              marginBottom: '24px'
            }}>
              {selectedJob.description}
            </p>

            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '12px'
            }}>
              Required Skills
            </h3>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '32px'
            }}>
              {selectedJob.skills.map((skill, idx) => (
                <span key={idx} style={{
                  background: 'rgba(59, 130, 246, 0.1)',
                  color: '#2563eb',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  {skill}
                </span>
              ))}
            </div>

            {/* Apply Button */}
            {appliedJobs.has(selectedJob.id) ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '2px solid #10b981',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                fontSize: '16px',
                fontWeight: '700',
                color: '#059669'
              }}>
                <CheckCircle2 size={24} />
                Application Sent Successfully
              </div>
            ) : (
              <button
                onClick={() => handleAIApply(selectedJob)}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '16px',
                  padding: '20px',
                  fontSize: '18px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(59, 130, 246, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.3)';
                }}>
                <Zap size={22} fill="white" />
                AI Apply - 1 Tap
              </button>
            )}
          </div>
        </div>
      )}

      {/* Talent Detail Modal */}
      {selectedTalent && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'flex-end',
          animation: 'fadeIn 0.3s ease-out'
        }}
        onClick={() => setSelectedTalent(null)}>
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '24px 24px 0 0',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '32px 24px',
              animation: 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
            <button 
              onClick={() => setSelectedTalent(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(0,0,0,0.05)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
              <X size={20} />
            </button>

            {/* Save/Bookmark Button */}
            <button
              onClick={() => handleSaveTalent(selectedTalent.id)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '60px',
                background: savedTalents.has(selectedTalent.id) ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)' : 'rgba(0,0,0,0.05)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.3s',
                boxShadow: savedTalents.has(selectedTalent.id) ? '0 4px 12px rgba(59, 130, 246, 0.3)' : 'none'
              }}>
              {savedTalents.has(selectedTalent.id) ? (
                <BookmarkCheck size={20} color="white" />
              ) : (
                <Bookmark size={20} color="#64748b" />
              )}
            </button>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px', marginBottom: '24px' }}>
              <img 
                src={selectedTalent.avatar} 
                alt={selectedTalent.name}
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '20px',
                  border: '4px solid #e0f2fe'
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <h2 style={{
                    fontSize: '26px',
                    fontWeight: '800',
                    color: '#0f172a',
                    fontFamily: '"DM Sans", sans-serif'
                  }}>
                    {selectedTalent.name}
                  </h2>
                  {selectedTalent.videoIntro && (
                    <div style={{
                      background: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)',
                      color: 'white',
                      padding: '4px 10px',
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: '700'
                    }}>
                      VIDEO
                    </div>
                  )}
                </div>
                
                <div style={{ color: '#64748b', fontSize: '16px', marginBottom: '12px', fontWeight: '600' }}>
                  {selectedTalent.title}
                </div>

                <div style={{ color: '#94a3b8', fontSize: '14px', marginBottom: '16px' }}>
                  📍 {selectedTalent.location}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Star size={18} fill="#fbbf24" color="#fbbf24" />
                    <span style={{ fontSize: '16px', fontWeight: '700', color: '#0f172a' }}>
                      {selectedTalent.rating}
                    </span>
                  </div>
                  <div style={{ fontSize: '15px', color: '#64748b', fontWeight: '600' }}>
                    {selectedTalent.projects} completed projects
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              background: 'rgba(139, 92, 246, 0.05)',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '24px'
            }}>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                color: '#0f172a',
                marginBottom: '12px'
              }}>
                Skills
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {selectedTalent.skills.map((skill, idx) => (
                  <span key={idx} style={{
                    background: 'rgba(139, 92, 246, 0.15)',
                    color: '#7c3aed',
                    padding: '8px 14px',
                    borderRadius: '10px',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '16px'
            }}>
              Portfolio Highlights
            </h3>

            <div style={{ marginBottom: '32px' }}>
              {selectedTalent.portfolio.map((project, idx) => (
                <div key={idx} style={{
                  background: 'rgba(0,0,0,0.02)',
                  borderRadius: '12px',
                  padding: '16px',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}>
                  <span style={{ fontSize: '15px', fontWeight: '600', color: '#0f172a' }}>
                    {project}
                  </span>
                  <ExternalLink size={18} color="#64748b" />
                </div>
              ))}
            </div>

            <button
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '16px',
                padding: '18px',
                fontSize: '17px',
                fontWeight: '700',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.3)'
              }}>
              <MessageCircle size={20} />
              Send Message
            </button>
          </div>
        </div>
      )}

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(8px)',
          zIndex: 200,
          display: 'flex',
          alignItems: 'flex-end',
          animation: 'fadeIn 0.3s ease-out'
        }}
        onClick={() => setSelectedEvent(null)}>
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '24px 24px 0 0',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '32px 24px',
              animation: 'slideUp 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}>
            <button 
              onClick={() => setSelectedEvent(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(0,0,0,0.05)',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
              <X size={20} />
            </button>

            {/* AI Match Badge */}
            <div style={{
              background: selectedEvent.match >= 90 ? 'linear-gradient(135deg, #10b981 0%, #059669 100%)' : 
                          selectedEvent.match >= 80 ? 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' :
                          'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
              color: 'white',
              padding: '8px 16px',
              borderRadius: '100px',
              fontSize: '14px',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              marginBottom: '20px'
            }}>
              <Sparkles size={16} />
              {selectedEvent.match}% Perfect Match
            </div>

            {/* Event Type Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: selectedEvent.type === 'Conference' ? 'rgba(59, 130, 246, 0.1)' :
                          selectedEvent.type === 'Workshop' ? 'rgba(139, 92, 246, 0.1)' :
                          selectedEvent.type === 'Meetup' ? 'rgba(236, 72, 153, 0.1)' :
                          selectedEvent.type === 'Festival' ? 'rgba(245, 158, 11, 0.1)' :
                          'rgba(16, 185, 129, 0.1)',
              color: selectedEvent.type === 'Conference' ? '#2563eb' :
                     selectedEvent.type === 'Workshop' ? '#7c3aed' :
                     selectedEvent.type === 'Meetup' ? '#db2777' :
                     selectedEvent.type === 'Festival' ? '#d97706' :
                     '#059669',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '13px',
              fontWeight: '700',
              marginBottom: '16px',
              marginLeft: '8px'
            }}>
              <Calendar size={14} />
              {selectedEvent.type}
            </div>

            <h2 style={{
              fontSize: '28px',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '12px',
              fontFamily: '"DM Sans", sans-serif',
              lineHeight: '1.2'
            }}>
              {selectedEvent.title}
            </h2>

            <div style={{
              fontSize: '18px',
              color: '#64748b',
              fontWeight: '600',
              marginBottom: '24px'
            }}>
              Organized by {selectedEvent.organizer}
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
              marginBottom: '24px',
              paddingBottom: '24px',
              borderBottom: '1px solid rgba(0,0,0,0.06)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#475569',
                fontSize: '15px',
                fontWeight: '600'
              }}>
                <Calendar size={18} />
                {selectedEvent.date}
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#475569',
                fontSize: '15px',
                fontWeight: '600'
              }}>
                <Clock size={18} />
                {selectedEvent.time}
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#475569',
                fontSize: '15px',
                fontWeight: '600'
              }}>
                {selectedEvent.format === 'Virtual' ? <Video size={18} /> : 
                 selectedEvent.format === 'Hybrid' ? <Globe size={18} /> :
                 <MapPin size={18} />}
                {selectedEvent.location}
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#475569',
                fontSize: '15px',
                fontWeight: '600'
              }}>
                <Users2 size={18} />
                {selectedEvent.attendees} attending
              </div>
            </div>

            {/* AI Insight */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(139, 92, 246, 0.05) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.2)',
              borderRadius: '16px',
              padding: '20px',
              marginBottom: '24px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px'
              }}>
                <Sparkles size={18} color="#3b82f6" />
                <span style={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: '#3b82f6',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  AI Insight
                </span>
              </div>
              <p style={{
                fontSize: '15px',
                color: '#475569',
                lineHeight: '1.6',
                fontWeight: '500'
              }}>
                {selectedEvent.aiInsight}
              </p>
            </div>

            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '12px'
            }}>
              About This Event
            </h3>
            
            <p style={{
              fontSize: '15px',
              color: '#475569',
              lineHeight: '1.7',
              marginBottom: '24px'
            }}>
              {selectedEvent.description}
            </p>

            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '12px'
            }}>
              Topics Covered
            </h3>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              marginBottom: '24px'
            }}>
              {selectedEvent.topics.map((topic, idx) => (
                <span key={idx} style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  color: '#7c3aed',
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  {topic}
                </span>
              ))}
            </div>

            <h3 style={{
              fontSize: '18px',
              fontWeight: '700',
              color: '#0f172a',
              marginBottom: '12px'
            }}>
              Featured Speakers
            </h3>

            <div style={{
              background: 'rgba(0,0,0,0.02)',
              borderRadius: '12px',
              padding: '16px',
              marginBottom: '24px'
            }}>
              {selectedEvent.speakers.map((speaker, idx) => (
                <div key={idx} style={{
                  fontSize: '15px',
                  color: '#475569',
                  marginBottom: idx < selectedEvent.speakers.length - 1 ? '8px' : '0'
                }}>
                  • {speaker}
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
              padding: '16px',
              background: 'rgba(16, 185, 129, 0.05)',
              borderRadius: '12px'
            }}>
              <span style={{
                fontSize: '18px',
                fontWeight: '700',
                color: '#0f172a'
              }}>
                Price
              </span>
              <span style={{
                fontSize: '20px',
                fontWeight: '800',
                color: selectedEvent.price === 'Free' ? '#10b981' : '#0f172a'
              }}>
                {selectedEvent.price}
              </span>
            </div>

            {/* Register Button */}
            {registeredEvents.has(selectedEvent.id) ? (
              <div style={{
                background: 'rgba(16, 185, 129, 0.1)',
                border: '2px solid #10b981',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px',
                fontSize: '16px',
                fontWeight: '700',
                color: '#059669'
              }}>
                <CheckCircle2 size={24} />
                You're Registered! See you there 🎉
              </div>
            ) : (
              <button
                onClick={() => handleRegisterEvent(selectedEvent.id)}
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  color: 'white',
                  border: 'none',
                  borderRadius: '16px',
                  padding: '20px',
                  fontSize: '18px',
                  fontWeight: '700',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px',
                  boxShadow: '0 8px 24px rgba(16, 185, 129, 0.3)',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 32px rgba(16, 185, 129, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(16, 185, 129, 0.3)';
                }}>
                <Calendar size={22} />
                Register for Event
              </button>
            )}
          </div>
        </div>
      )}

      {/* AI Apply Modal */}
      {showApplyModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.7)',
          backdropFilter: 'blur(8px)',
          zIndex: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '24px',
            padding: '40px',
            maxWidth: '400px',
            width: '100%',
            textAlign: 'center'
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 24px',
              animation: 'pulse 1.5s ease-in-out infinite'
            }}>
              <Sparkles size={40} color="white" />
            </div>

            <style>{`
              @keyframes pulse {
                0%, 100% { transform: scale(1); opacity: 1; }
                50% { transform: scale(1.05); opacity: 0.9; }
              }
            `}</style>

            <h3 style={{
              fontSize: '24px',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '16px',
              fontFamily: '"DM Sans", sans-serif'
            }}>
              AI is Working Magic ✨
            </h3>

            <div style={{
              fontSize: '15px',
              color: '#64748b',
              lineHeight: '1.6',
              marginBottom: '20px'
            }}>
              <div style={{ marginBottom: '12px' }}>✓ Analyzing job requirements</div>
              <div style={{ marginBottom: '12px' }}>✓ Selecting best portfolio samples</div>
              <div style={{ marginBottom: '12px' }}>✓ Writing personalized intro</div>
              <div>✓ Submitting your application</div>
            </div>

            <div style={{
              width: '100%',
              height: '4px',
              background: 'rgba(0,0,0,0.05)',
              borderRadius: '100px',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '100%',
                background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
                borderRadius: '100px',
                animation: 'progress 2.5s ease-in-out'
              }} />
            </div>

            <style>{`
              @keyframes progress {
                from { width: 0%; }
                to { width: 100%; }
              }
            `}</style>
          </div>
        </div>
      )}

      {/* Save Success Toast */}
      {showSaveSuccess && (
        <div style={{
          position: 'fixed',
          top: '90px',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
          color: 'white',
          padding: '16px 24px',
          borderRadius: '16px',
          boxShadow: '0 12px 40px rgba(16, 185, 129, 0.4)',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          zIndex: 400,
          animation: 'slideInTop 0.3s ease-out'
        }}>
          <style>{`
            @keyframes slideInTop {
              from { 
                opacity: 0; 
                transform: translateX(-50%) translateY(-20px);
              }
              to { 
                opacity: 1; 
                transform: translateX(-50%) translateY(0);
              }
            }
          `}</style>
          <CheckCircle2 size={20} />
          <span style={{ fontSize: '15px', fontWeight: '700' }}>
            Contact saved successfully!
          </span>
        </div>
      )}
    </div>
  );
};

export default FursaApp;