/**
 * HØLY™ Design System — 2D Line Art Icon Library
 * 
 * Unified icon library with consistent stroke width (1.5px), sizing (16px, 24px, 32px),
 * and line-only style for luxury minimalism.
 * 
 * Token Reference:
 * - Stroke: Icon / Stroke / Standard (1.5px)
 * - Color: Icon / Primary (#1A1A1A) or Icon / Subtle (opacity 0.7)
 * - Grid: 24px base with 16px, 24px, 32px variants
 */

import { 
  Droplet,
  MessageCircle,
  Sparkles,
  Moon,
  Sun,
  Package,
  Square,
  Dna,
  Wand2,
  Triangle,
  Printer,
  CreditCard,
  Tag,
  FileText,
  Gem,
  Eye,
  Circle,
  ArrowRight,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  X,
  Check,
  Info,
  AlertCircle,
  Heart,
  ShoppingCart,
  User,
  Search,
  Menu,
  Star,
  Zap,
  Flame,
  Home,
  Settings,
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Clock,
  Download,
  Upload,
  Share2,
  ExternalLink,
  Edit,
  Trash2,
  Copy,
  Image as ImageIcon,
  Video,
  Music,
  Award,
  Shield,
  Lock,
  Unlock,
  TrendingUp,
  Filter,
  Grid as GridIcon,
  List,
  MoreHorizontal,
  MoreVertical,
  Leaf,
  Recycle,
  Beaker,
  Link,
  Gift,
  Palette,
  Flower2,
  Timer,
  Clipboard,
  AlertTriangle,
  Target,
  Compass,
  Megaphone,
  Brain,
  BarChart3,
  Waves,
  Store,
  FileStack,
  Navigation,
  Camera,
  ZoomIn,
  ZoomOut
} from 'lucide-react';

export type IconSize = 16 | 24 | 32 | 48;

export interface HOLYIconProps {
  size?: IconSize;
  color?: string;
  opacity?: number;
  strokeWidth?: number;
  className?: string;
}

const defaultProps: Partial<HOLYIconProps> = {
  size: 24,
  color: '#1A1A1A',
  opacity: 1,
  strokeWidth: 1.5
};

/**
 * Core HØLY Brand Icons
 */
export const HOLYDroplet = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Droplet className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYMessage = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <MessageCircle className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYSparkle = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Sparkles className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYMoon = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Moon className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYSun = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Sun className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYCircle = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Circle className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYEye = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Eye className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYCamera = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Camera className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

/**
 * System & Navigation Icons
 */
export const HOLYPackage = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Package className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYSquare = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Square className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYDna = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Dna className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYWand = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Wand2 className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYTriangle = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Triangle className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYPrinter = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Printer className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYCard = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <CreditCard className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYTag = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Tag className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYDocument = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <FileText className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYGem = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Gem className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYLeaf = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Leaf className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYRecycle = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Recycle className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYBeaker = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Beaker className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYLink = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Link className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYGift = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Gift className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYPalette = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Palette className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYFlower = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Flower2 className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYTimer = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Timer className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYClipboard = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Clipboard className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

/**
 * Action Icons
 */
export const HOLYArrowRight = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <ArrowRight className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYArrowLeft = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <ArrowLeft className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYChevronRight = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <ChevronRight className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYChevronLeft = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <ChevronLeft className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYChevronDown = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <ChevronDown className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYChevronUp = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <ChevronUp className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYPlus = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Plus className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYMinus = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Minus className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYClose = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <X className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYCheck = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Check className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

/**
 * Status & Feedback Icons
 */
export const HOLYInfo = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Info className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYAlert = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <AlertCircle className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYWarning = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <AlertTriangle className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYTarget = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Target className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYCompass = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Compass className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYMegaphone = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Megaphone className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYBrain = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Brain className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYChart = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <BarChart3 className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYWave = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Waves className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYStore = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Store className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYFileStack = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <FileStack className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYNavigation = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Navigation className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYZoomIn = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <ZoomIn className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYZoomOut = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <ZoomOut className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

/**
 * E-commerce Icons
 */
export const HOLYHeart = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Heart className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYCart = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <ShoppingCart className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYStar = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Star className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

/**
 * User & Contact Icons
 */
export const HOLYUser = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <User className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYSearch = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Search className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYMenu = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Menu className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYMail = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Mail className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYPhone = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Phone className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYMapPin = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <MapPin className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

/**
 * Utility Icons
 */
export const HOLYCalendar = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Calendar className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYClock = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Clock className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYDownload = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Download className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYUpload = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Upload className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYShare = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Share2 className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYExternalLink = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <ExternalLink className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYEdit = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Edit className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYTrash = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Trash2 className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYCopy = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Copy className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

/**
 * Media Icons
 */
export const HOLYImage = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <ImageIcon className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYVideo = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Video className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYMusic = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Music className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

/**
 * Special Icons
 */
export const HOLYAward = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Award className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYShield = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Shield className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYLock = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Lock className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYUnlock = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Unlock className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYZap = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Zap className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYFlame = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Flame className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYTrendingUp = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <TrendingUp className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYHome = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Home className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYSettings = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Settings className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYHelp = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <HelpCircle className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYFilter = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Filter className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYGrid = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <GridIcon className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYList = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <List className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYMoreHorizontal = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <MoreHorizontal className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

export const HOLYMoreVertical = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <MoreVertical className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

/**
 * Icon mapping for navigation emojis
 */
export const navigationIconMap = {
  '🗒️': HOLYDocument,
  '💠': HOLYGem,
  '🔲': HOLYSquare,
  '📦': HOLYPackage,
  '🧬': HOLYDna,
  '🧿': HOLYEye,
  '🪄': HOLYWand,
  '📇': HOLYCard,
  '📐': HOLYTriangle,
  '🏷️': HOLYTag,
  '🖨️': HOLYPrinter,
};

/**
 * Icon mapping for content emojis
 */
export const contentIconMap = {
  '💧': HOLYDroplet,
  '💬': HOLYMessage,
  '✨': HOLYSparkle,
  '🌑': HOLYMoon,
  '🌕': HOLYSun,
  '🌀': HOLYCircle,
};

/**
 * RITUAL SYSTEM ICONS — Custom 2D Line Art
 * 
 * Brand-standard icons for the five Ritual Care™ systems.
 * Each icon represents the essence and symbolism of its system.
 * Naming: system-icon-[system-name]
 */

// system-icon-aftercare — Sparkle/Starburst for healing and restoration
export const HOLYIconAftercare = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <Sparkles className={className} size={size} style={{ color, opacity }} strokeWidth={strokeWidth} />
);

// system-icon-renewal — Sprouting Leaf for skin renewal and regeneration
export const HOLYIconRenewal = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color, opacity }}
  >
    <path
      d="M12 22C12 22 5 17 5 11C5 8.79086 6.79086 7 9 7C10.1046 7 11 7.89543 11 9V2C11 2 12 2 12 2C12 2 13 2 13 2V9C13 7.89543 13.8954 7 15 7C17.2091 7 19 8.79086 19 11C19 17 12 22 12 22Z"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// system-icon-touch — Hand/Fingertip for therapeutic touch and massage
export const HOLYIconTouch = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color, opacity }}
  >
    <path
      d="M13 4.5V11M13 4.5C13 3.67157 13.6716 3 14.5 3C15.3284 3 16 3.67157 16 4.5V7.5M13 4.5C13 3.67157 12.3284 3 11.5 3C10.6716 3 10 3.67157 10 4.5V11M16 7.5V9.5M16 7.5C16 6.67157 16.6716 6 17.5 6C18.3284 6 19 6.67157 19 7.5V11.5C19 11.5 19 13 19 14C19 17.866 15.866 21 12 21C9.5 21 7.5 20 6.5 18.5L4 14.5C4 14.5 3.5 13.5 4.5 13C5.5 12.5 6.5 13.5 6.5 13.5L8 15.5V6.5C8 5.67157 8.67157 5 9.5 5C10.3284 5 11 5.67157 11 6.5"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// system-icon-union — Intersecting Circles for intimacy and connection
export const HOLYIconUnion = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color, opacity }}
  >
    <circle
      cx="9"
      cy="12"
      r="6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="15"
      cy="12"
      r="6"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// system-icon-vital — Wind/Breath flowing lines for energy and breathwork
export const HOLYIconVital = ({ size = 24, color = '#1A1A1A', opacity = 1, strokeWidth = 1.5, className }: HOLYIconProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ color, opacity }}
  >
    <path
      d="M3 8C3 8 6 6 9 8C12 10 15 6 18 8C21 10 21 8 21 8"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 12C3 12 6 10 9 12C12 14 15 10 18 12C21 14 21 12 21 12"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 16C3 16 6 14 9 16C12 18 15 14 18 16C21 18 21 16 21 16"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
