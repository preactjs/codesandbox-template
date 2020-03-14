import { h } from 'preact';

export function Logo() {
  return (
    <svg class="logo" viewBox="-256 -256 512 512" title="Preact">
      <defs>
        <filter id="shadow">
          <feDropShadow dx="0" dy="0" stdDeviation="20" flood-color="#aaa" />
        </filter>
      </defs>
      <path
        d="M0,-256 221.7025033688164,-128 221.7025033688164,128 0,256 -221.7025033688164,128 -221.7025033688164,-128z"
        fill="#673ab8"
        style="filter:url(#shadow);"
      />
      <ellipse
        cx="0"
        cy="0"
        rx="75px"
        ry="196px"
        stroke-width="16px"
        fill="none"
        stroke="#fff"
        transform="rotate(52)"
      />
      <ellipse
        cx="0"
        cy="0"
        rx="75px"
        ry="196px"
        stroke-width="16px"
        fill="none"
        stroke="#fff"
        transform="rotate(-52)"
      />
      <circle cx="0" cy="0" r="34" fill="#fff" />
    </svg>
  );
}
