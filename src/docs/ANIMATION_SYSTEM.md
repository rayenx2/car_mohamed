# 🎬 Animation System Documentation

## Overview
This project uses **GSAP (GreenSock Animation Platform)** for smooth, performant scroll animations and transitions. GSAP is already installed and configured.

## 🚀 Features Implemented

### 1. **Scroll Animations**
- ✅ **Fade Up**: Elements fade in from bottom
- ✅ **Fade Left**: Elements slide in from left
- ✅ **Fade Right**: Elements slide in from right  
- ✅ **Scale**: Elements scale up with fade
- ✅ **Slide Up**: Elements slide up from bottom

### 2. **Smooth Scroll Navigation**
- ✅ **Route Transitions**: Smooth scroll to top on route changes
- ✅ **Section Navigation**: Smooth scroll to specific sections
- ✅ **Progress Indicator**: Visual scroll progress bar

### 3. **Performance Optimized**
- ✅ **ScrollTrigger**: Efficient scroll-based animations
- ✅ **Auto-cleanup**: Prevents memory leaks
- ✅ **Mobile Optimized**: Touch-friendly animations

## 📁 File Structure

```
src/
├── hooks/
│   └── useScrollAnimations.tsx    # Main animation hook
├── components/
│   ├── AnimatedSection.tsx        # Reusable animated section
│   ├── ScrollToTop.tsx           # Route-based scroll to top
│   ├── ScrollProgress.tsx        # Scroll progress indicator
│   └── SmoothScrollLink.tsx      # Smooth scroll navigation
└── docs/
    └── ANIMATION_SYSTEM.md       # This documentation
```

## 🎯 Usage Examples

### Basic Animated Section
```tsx
import AnimatedSection from '../components/AnimatedSection';

<AnimatedSection 
  className="py-20 bg-white"
  animationType="fadeUp"
  delay={0.2}
  duration={0.8}
>
  <h2>Your Content Here</h2>
</AnimatedSection>
```

### Animation Types
```tsx
// Fade from bottom (default)
<AnimatedSection animationType="fadeUp">

// Slide from left
<AnimatedSection animationType="fadeLeft">

// Slide from right  
<AnimatedSection animationType="fadeRight">

// Scale with fade
<AnimatedSection animationType="scale">

// Slide up from bottom
<AnimatedSection animationType="slideUp">
```

### Staggered Child Animations
```tsx
<AnimatedSection animationType="fadeUp" stagger={0.1}>
  <div className="animate-child">Child 1</div>
  <div className="animate-child">Child 2</div>
  <div className="animate-child">Child 3</div>
</AnimatedSection>
```

### Smooth Scroll Navigation
```tsx
import SmoothScrollLink from '../components/SmoothScrollLink';

// Internal section link
<SmoothScrollLink to="#section-id" offset={80}>
  Go to Section
</SmoothScrollLink>

// Regular route link
<SmoothScrollLink to="/about">
  About Page
</SmoothScrollLink>
```

## ⚙️ Configuration Options

### AnimatedSection Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `animationType` | `'fadeUp' \| 'fadeLeft' \| 'fadeRight' \| 'scale' \| 'slideUp'` | `'fadeUp'` | Animation style |
| `delay` | `number` | `0` | Animation delay in seconds |
| `duration` | `number` | `0.8` | Animation duration in seconds |
| `trigger` | `string` | `"top 80%"` | ScrollTrigger start point |
| `stagger` | `number` | `0` | Child animation stagger delay |

### ScrollTrigger Options
- **Start**: `"top 80%"` - Animation starts when element is 80% from top
- **End**: `"bottom 20%"` - Animation ends when element is 20% from bottom
- **Toggle Actions**: `"play none none reverse"` - Play on enter, reverse on leave

## 🎨 Animation Timing

### Home Page Sections
1. **Hero Section**: `fadeUp` (0s delay)
2. **Process Explanation**: `fadeLeft` (0.2s delay)
3. **Why Choose Us**: `scale` (0.3s delay)
4. **How It Works**: `slideUp` (0.4s delay)
5. **Who We Serve**: `fadeRight` (0.5s delay)
6. **Problems We Solve**: `fadeUp` (0.6s delay)
7. **Featured Stock**: `scale` (0.7s delay)

## 🔧 Advanced Usage

### Custom Animation Hook
```tsx
import { useScrollAnimations } from '../hooks/useScrollAnimations';

const MyComponent = () => {
  const { addSectionRef } = useScrollAnimations();
  
  return (
    <section ref={(el) => addSectionRef(el, 0)}>
      Custom animated content
    </section>
  );
};
```

### Parallax Effects
```tsx
import { useParallax } from '../hooks/useScrollAnimations';

const MyComponent = () => {
  const parallaxRef = useParallax(0.5); // 50% parallax speed
  
  return (
    <div ref={parallaxRef}>
      Parallax content
    </div>
  );
};
```

## 🚀 Performance Tips

1. **Use `will-change` CSS property** for animated elements
2. **Limit simultaneous animations** to prevent jank
3. **Use `transform` and `opacity`** for best performance
4. **Clean up ScrollTrigger instances** to prevent memory leaks

## 🎯 Future Enhancements

### Planned Features
- [ ] **Page Transitions**: Route-based page transitions
- [ ] **Loading Animations**: Skeleton loaders and spinners
- [ ] **Micro-interactions**: Button hover effects, form animations
- [ ] **3D Animations**: Card flips, 3D transforms
- [ ] **Gesture Support**: Touch and swipe animations

### React Bits Integration
When you decide to use React Bits components, they will work seamlessly with this animation system:
- No dependency conflicts
- Consistent animation timing
- Shared GSAP instance
- Unified performance optimization

## 🐛 Troubleshooting

### Common Issues
1. **Animations not triggering**: Check ScrollTrigger registration
2. **Performance issues**: Reduce animation complexity
3. **Mobile problems**: Test on actual devices
4. **Memory leaks**: Ensure proper cleanup

### Debug Mode
Uncomment the `markers: true` line in `useScrollAnimations.tsx` to see ScrollTrigger markers.

## 📚 Resources

- [GSAP Documentation](https://greensock.com/docs/)
- [ScrollTrigger Plugin](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Performance Best Practices](https://greensock.com/docs/v3/GSAP/gsap.set())
- [React Animation Patterns](https://reactjs.org/docs/animation.html)
