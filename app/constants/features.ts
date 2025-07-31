import { Clock, Users, BookOpen, Star , Brain , Database} from 'lucide-react'; // Lucide icons

export const features = [
  {
    id: 1,
    title: 'Efficient Planning',
    description: 'Organize and schedule study sessions effectively.',
    icon: Clock,
    showCta: true,
  },
  {
    id: 2,
    title: 'Group Support',
    description: 'Collaborate with classmates and mentors.',
    icon: Users,
    showCta: false,
  },
  {
    id: 3,
    title: 'All-In-One Resources',
    description: 'Access all materials from one place.',
    icon: BookOpen,
    showCta: false,
  },
  {
    id: 4,
    title: 'Intelligent Insights',
    description: 'Provides personalized insights and recommendations..',
    icon: Brain,
    showCta: false,
  },
  {
    id: 5,
    title: 'Robust Security',
    description: 'Ensures your data is protected with industry-leading security.',
    icon: Database,
    showCta: false,
  },
  {
    id: 6,
    title: 'Motivation',
    description: 'Track progress and earn achievements.',
    icon: Star,
    showCta: false,
  },
];
