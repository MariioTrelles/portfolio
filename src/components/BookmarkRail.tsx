type BookmarkItem = { id: string; label: string };

type BookmarkRailProps = {
  items: readonly BookmarkItem[];
  activeIndex: number;
  onSelect: (index: number) => void;
};

function BookmarkRail({ items, activeIndex, onSelect }: BookmarkRailProps) {
  return (
    <nav className="bookmark-rail" aria-label="Navegación de capítulos">
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="bookmark-tab"
            aria-current={isActive ? 'page' : undefined}
            onClick={(event) => {
              event.preventDefault();
              onSelect(index);
            }}
          >
            <span className="bookmark-tab-index">{String(index + 1).padStart(2, '0')}</span>
            <span className="bookmark-tab-label">{item.label}</span>
          </a>
        );
      })}
    </nav>
  );
}

export default BookmarkRail;
