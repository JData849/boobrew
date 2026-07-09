import { announcementMessages } from "@/components/homepage/homepage.data";

export function AnnouncementBar() {
  return (
    <aside className="announcement-bar" aria-label="Store announcement">
      <p>{announcementMessages[0]}</p>
    </aside>
  );
}
