

# Replace About Page Photo Placeholder

## Changes

### 1. Copy uploaded image to project
- Copy `user-uploads://Copy_of_IMG_0323-2.JPG` to `src/assets/owner-team.jpg`

### 2. Update `src/pages/About.tsx`
- Add import: `import ownerPhoto from "@/assets/owner-team.jpg";`
- Replace the placeholder `<div>` (lines 28-30) with a responsive `<img>`:
  - Classes: `w-32 h-32 sm:w-40 sm:h-40 rounded object-cover shrink-0`
  - Alt text describing the owner/team photo

