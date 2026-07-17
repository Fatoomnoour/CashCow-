# Cash Cow System — Strategy Call Preparation

A polished, responsive onboarding experience created for **Eng. Mahmoud Farag** and Cash Cow System clients. The page helps every prospect arrive prepared, informed, and ready to make the most of their discovery call.

## Eng. Mahmoud Farag

Mahmoud Farag is a Business Coach at Cash Cow System, working with coaches, trainers, consultants, and agency owners to create clearer, more scalable paths to business growth.

- **Schedule a discovery call:** [Calendly](https://calendly.com/mahmoud_faragk50/cash-cow-system-discovery-call)
- **Professional profile:** [LinkedIn](https://www.linkedin.com/in/mahmoudfaragk50)

## Project highlights

- Four clear preparation steps with completion tracking
- Persistent progress saved on the visitor’s device
- Direct access to the preparation video and 70-minute training
- Meeting confirmation interaction
- Cash Cow System community link
- Professional Calendly and LinkedIn contact details in this README
- Responsive layout for desktop, tablet, and mobile
- Accessible keyboard focus states and reduced-motion support
- Automated deployment to GitHub Pages

## Technology

- Next.js 16
- React 19
- TypeScript
- Plain responsive CSS
- GitHub Actions and GitHub Pages

## Run locally

Install [Node.js 22](https://nodejs.org/) or newer, then run:

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

## Project structure

```text
app/
  page.tsx       Main page content, actions, and progress logic
  globals.css    Complete visual design and responsive styles
  layout.tsx     Page metadata and shared layout
public/assets/   Cash Cow System images and video previews
.github/workflows/deploy-pages.yml
                 Automatic GitHub Pages deployment
```

## Deploy to GitHub

Create an empty GitHub repository. From the project folder, run:

```bash
git init
git add .
git commit -m "Launch Cash Cow strategy call page"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

Replace `USERNAME` and `REPOSITORY` with your GitHub account and repository name.

Then open **Settings → Pages** in the repository and choose **GitHub Actions** as the deployment source. Every future push to `main` will publish the latest version automatically.

## Update the website

Edit the content in `app/page.tsx`, the design in `app/globals.css`, or replace images inside `public/assets`. Then publish the update:

```bash
git add .
git commit -m "Update website"
git push
```

---

**Cash Cow System**  
Hosted by [Eng. Mahmoud Farag](https://www.linkedin.com/in/mahmoudfaragk50) · [Book a discovery call](https://calendly.com/mahmoud_faragk50/cash-cow-system-discovery-call)
