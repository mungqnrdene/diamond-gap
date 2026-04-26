const iconMap = {
  compass: (
    <path d="M14.5 9.5 9 11l1.5 5.5L16 15l-1.5-5.5ZM12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9Z" />
  ),
  spark: (
    <path d="m12 3 1.8 4.7L18.5 9l-4.7 1.8L12 15.5l-1.8-4.7L5.5 9l4.7-1.3L12 3Z" />
  ),
  growth: (
    <path d="M5 16c2.5-5 6.7-8.3 14-10-1.7 7.2-5 11.5-10 14M7 7h4M7 11h3" />
  ),
  briefcase: (
    <path d="M9 7V6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1m4 3H5m0 0v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7M5 10V8a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2" />
  ),
  laptop: <path d="M4 6h16v10H4zM2 18h20M9 15h6" />,
  language: (
    <path d="M4 6h7M7.5 6c0 5-1.5 8.5-4.5 11m4.5-11c1.2 3.3 3 5.9 5.5 8M14 6h6m-3 0v11m-3-4h6" />
  ),
  building: (
    <path d="M4 20V6l8-3 8 3v14M9 8h.01M15 8h.01M9 12h.01M15 12h.01M9 16h.01M15 16h.01M11 20v-3h2v3" />
  ),
  camera: (
    <path d="M4 8h3l2-2h6l2 2h3v10H4zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
  ),
  coins: (
    <path d="M12 6c4.4 0 8 1.3 8 3s-3.6 3-8 3-8-1.3-8-3 3.6-3 8-3Zm-8 6v3c0 1.7 3.6 3 8 3s8-1.3 8-3v-3" />
  ),
  shield: (
    <path d="M12 3 5 6v5c0 5 3.4 8.7 7 10 3.6-1.3 7-5 7-10V6l-7-3Z" />
  ),
  team: (
    <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 1a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM4 19a4 4 0 0 1 8 0m2 0a3.5 3.5 0 0 1 7 0" />
  ),
  chart: <path d="M5 19V9m7 10V5m7 14v-7M3 19h18" />,
  send: <path d="M21 3 10 14M21 3l-7 18-4-7-7-4 18-7Z" />,
};

export function FeatureIcon({ name, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {iconMap[name]}
    </svg>
  );
}
