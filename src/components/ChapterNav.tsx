type ChapterNavProps = {
  activeIndex: number;
  count: number;
  onPrev: () => void;
  onNext: () => void;
};

function ChapterNav({ activeIndex, count, onPrev, onNext }: ChapterNavProps) {
  return (
    <div className="chapter-nav">
      <button
        type="button"
        className="chapter-nav-btn"
        aria-label="Capítulo anterior"
        onClick={onPrev}
        disabled={activeIndex <= 0}
      >
        ‹
      </button>
      <button
        type="button"
        className="chapter-nav-btn"
        aria-label="Siguiente capítulo"
        onClick={onNext}
        disabled={activeIndex >= count - 1}
      >
        ›
      </button>
    </div>
  );
}

export default ChapterNav;
