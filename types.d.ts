declare module '*.png' {
    const value: string;
    export default value;
}

declare module '*.jpg' {
    const value: string;
    export default value;
}

declare module '*.jpeg' {
    const value: string;
    export default value;
}

declare module '*.svg' {
    const value: string;
    export default value;
}

// Since wouter, lucide-react and framer-motion don't have types for this env we declare them as any
declare module 'wouter' {
    export const Link: any;
    export const Route: any;
    export const Switch: any;
    export const useLocation: any;
    export const useRoute: any;
}

declare module 'framer-motion' {
    export const motion: any;
    export const AnimatePresence: any;
}

declare module 'lucide-react' {
    export const Menu: any;
    export const X: any;
    export const Phone: any;
    export const ArrowRight: any;
    export const ArrowLeft: any;
    export const Camera: any;
    export const Video: any;
    export const Smartphone: any;
    export const CheckCircle: any;
    export const Quote: any;
    export const Target: any;
    export const Zap: any;
    export const Users: any;
    export const TrendingUp: any;
    export const MapPin: any;
    export const Mail: any;
    export const Facebook: any;
    export const Instagram: any;
    export const Send: any;
    export const AlertCircle: any;
    export const Loader2: any;
    export const Search: any;
    export const Play: any;
    export const Calendar: any;
    export const ChevronLeft: any;
    export const ChevronRight: any;
    export const ChevronUp: any;
    export const ChevronDown: any;
    export const Check: any;
    export const Circle: any;
    export const MoreHorizontal: any;
    export const GripVertical: any;
    export const GripHorizontal: any;
    export const SidebarClose: any;
    export const PanelLeft: any;
    export const PanelLeftIcon: any;
    export const Minus: any;
    export const MessageCircle: any;
    export const ExternalLink: any;
    export const Heart: any;
    export const Dot: any;
    export const Sparkles: any;
}

declare module 'react-icons/si' {
    export const SiFacebook: any;
    export const SiInstagram: any;
    export const SiTiktok: any;
    export const SiWhatsapp: any;
}
