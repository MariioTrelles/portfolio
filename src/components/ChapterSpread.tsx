import type { ReactNode } from 'react';

type ChapterSpreadProps = {
  left: ReactNode;
  right: ReactNode;
  leftClassName?: string;
  rightClassName?: string;
};

function ChapterSpread({ left, right, leftClassName, rightClassName }: ChapterSpreadProps) {
  return (
    <div className="chapter-spread">
      <div
        className={['chapter-spread-half', 'chapter-spread-left', leftClassName]
          .filter(Boolean)
          .join(' ')}
      >
        {left}
      </div>
      <div
        className={['chapter-spread-half', 'chapter-spread-right', rightClassName]
          .filter(Boolean)
          .join(' ')}
      >
        {right}
      </div>
    </div>
  );
}

export default ChapterSpread;
