
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const BlogSection = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Steam Car Washing: Why It's the Future",
      excerpt: "Discover how steam technology revolutionizes car cleaning with eco-friendly solutions that provide superior results while protecting your vehicle's finish.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      date: "2024-06-01",
      readTime: "8 min read",
      category: "Technology",
      featured: true
    },
    {
      id: 2,
      title: "Mobile Detailing vs Traditional Car Wash: The Complete Comparison",
      excerpt: "Learn why mobile detailing offers superior convenience, quality, and value compared to traditional car wash methods.",
      image: "https://images.unsplash.com/photo-1486326658981-ed68abe5868e?w=600&h=400&fit=crop",
      date: "2024-05-28",
      readTime: "6 min read",
      category: "Services",
      featured: true
    },
    {
      id: 3,
      title: "5 Signs Your Car Needs Professional Detailing Right Now",
      excerpt: "Recognize the key indicators that your vehicle requires professional attention to maintain its appearance and value.",
      image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&h=400&fit=crop",
      date: "2024-05-25",
      readTime: "5 min read",
      category: "Maintenance",
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: "How to Prepare Your Car for Professional Detailing",
      excerpt: "Simple steps to ensure you get the most out of your detailing appointment.",
      date: "2024-05-22",
      readTime: "4 min read",
      category: "Tips"
    },
    {
      id: 5,
      title: "The Environmental Benefits of Steam Cleaning",
      excerpt: "Why eco-conscious car owners are choosing steam technology.",
      date: "2024-05-20",
      readTime: "6 min read",
      category: "Environment"
    },
    {
      id: 6,
      title: "Seasonal Car Care: Protecting Your Investment Year-Round",
      excerpt: "Expert advice for maintaining your vehicle through all seasons.",
      date: "2024-05-18",
      readTime: "7 min read",
      category: "Maintenance"
    },
    {
      id: 7,
      title: "Understanding Different Types of Car Wax and Coatings",
      excerpt: "A comprehensive guide to choosing the right protection for your vehicle.",
      date: "2024-05-15",
      readTime: "9 min read",
      category: "Products"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Blog Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Expert Car Care <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with the latest trends, tips, and techniques in professional car detailing. 
            Our experts share valuable insights to help you maintain your vehicle's pristine condition.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Featured Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => (
              <Card key={post.id} className="hover-scale cursor-pointer group overflow-hidden" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {post.category}
                  </Badge>
                </div>
                <CardHeader>
                  <h4 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h4>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-sm text-gray-500 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full group/btn">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Recent Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recentPosts.map((post, index) => (
              <Card key={post.id} className="hover-scale cursor-pointer group" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <Badge variant="secondary" className="mb-2">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {post.title}
                  </h4>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* View All Posts Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="px-8">
            View All Articles
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
