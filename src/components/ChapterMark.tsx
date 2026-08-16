type ChapterMarkProps = {
  index: number;
  label: string;
};

function ChapterMark({ index, label }: ChapterMarkProps) {
  const number = String(index).padStart(2, '0');

  return (
    <div className="chapter-mark" aria-hidden="true">
      <span className="chapter-mark-index">{number}</span>
      <span className="chapter-mark-sep"> · </span>
      <span className="chapter-mark-label">{label}</span>
    </div>
  );
}

export default ChapterMark;
