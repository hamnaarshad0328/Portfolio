import type { ProjectSlug } from "@/data/projects";

type ProjectDiagramProps = {
  slug: ProjectSlug;
};

export function ProjectDiagram({ slug }: ProjectDiagramProps) {
  return (
    <div className="relative h-full min-h-52 overflow-hidden bg-[#101828]" aria-hidden="true">
      <svg viewBox="0 0 640 280" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid meet">
        {slug === "conversa" ? <ConversaDiagram /> : null}
        {slug === "crop-disease-prediction" ? <CropDiagram /> : null}
        {slug === "autoslides" ? <SlidesDiagram /> : null}
        {slug === "parking-space-detection" ? <ParkingDiagram /> : null}
      </svg>
      <span className="absolute bottom-3 left-4 font-display text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
        Diagram
      </span>
    </div>
  );
}

function Label({ x, y, children }: { x: number | string; y: number | string; children: string }) {
  return (
    <text
      x={x}
      y={y}
      fill="#94A3B8"
      fontSize={11}
      letterSpacing={1.6}
      fontFamily="ui-sans-serif, system-ui, sans-serif"
    >
      {children}
    </text>
  );
}

function ConversaDiagram() {
  return (
    <>
      <Label x="36" y="36">
        SOURCE
      </Label>
      <Label x="250" y="36">
        CHUNKS
      </Label>
      <Label x="430" y="36">
        REPLY
      </Label>

      <rect x="36" y="52" width="156" height="46" rx="8" fill="#151E30" stroke="#2A3650" />
      <rect x="50" y="68" width="92" height="4" rx="2" fill="#668BFF" />
      <rect x="50" y="78" width="68" height="4" rx="2" fill="#E8EDF7" opacity="0.35" />

      <rect x="36" y="110" width="140" height="46" rx="8" fill="#151E30" stroke="#2A3650" />
      <rect x="50" y="126" width="78" height="4" rx="2" fill="#8B78EB" />
      <rect x="50" y="136" width="56" height="4" rx="2" fill="#E8EDF7" opacity="0.35" />

      <rect x="36" y="168" width="164" height="46" rx="8" fill="#151E30" stroke="#2A3650" />
      <rect x="50" y="184" width="104" height="4" rx="2" fill="#668BFF" opacity="0.75" />
      <rect x="50" y="194" width="72" height="4" rx="2" fill="#E8EDF7" opacity="0.35" />

      <path d="M200 75 C230 75 232 70 258 70" fill="none" stroke="#2A3650" strokeWidth="1.25" />
      <path d="M176 133 C220 133 230 112 258 108" fill="none" stroke="#2A3650" strokeWidth="1.25" />
      <path d="M200 191 C228 191 236 156 258 146" fill="none" stroke="#2A3650" strokeWidth="1.25" />

      {[
        { y: 58, fill: "#668BFF" },
        { y: 96, fill: "#8B78EB" },
        { y: 134, fill: "#668BFF" },
        { y: 172, fill: "#8B78EB" },
      ].map((chunk) => (
        <rect
          key={chunk.y}
          x="258"
          y={chunk.y}
          width="30"
          height="30"
          rx="7"
          fill={chunk.fill}
          fillOpacity="0.18"
          stroke={chunk.fill}
        />
      ))}

      <path d="M288 73 C340 73 360 86 420 92" fill="none" stroke="#668BFF" strokeOpacity="0.55" strokeWidth="1.25" />
      <path d="M288 149 C350 149 370 168 450 176" fill="none" stroke="#8B78EB" strokeOpacity="0.7" strokeWidth="1.25" />

      <rect x="420" y="68" width="184" height="56" rx="12" fill="#151E30" stroke="#668BFF" strokeOpacity="0.55" />
      <rect x="436" y="88" width="112" height="5" rx="2" fill="#E8EDF7" opacity="0.75" />
      <rect x="436" y="100" width="78" height="5" rx="2" fill="#E8EDF7" opacity="0.35" />

      <rect x="448" y="146" width="164" height="68" rx="12" fill="#668BFF" fillOpacity="0.12" stroke="#668BFF" />
      <rect x="464" y="168" width="108" height="5" rx="2" fill="#668BFF" />
      <rect x="464" y="180" width="86" height="5" rx="2" fill="#E8EDF7" opacity="0.4" />
      <rect x="464" y="192" width="64" height="5" rx="2" fill="#E8EDF7" opacity="0.25" />
    </>
  );
}

function CropDiagram() {
  return (
    <>
      <path
        d="M320 28 C392 78 414 146 320 236 C226 146 248 78 320 28 Z"
        fill="#151E30"
        stroke="#668BFF"
        strokeWidth="1.5"
      />
      <path d="M320 46 L320 214" fill="none" stroke="#668BFF" strokeOpacity="0.35" />
      <path d="M278 110 C300 96 330 100 348 118" fill="none" stroke="#668BFF" strokeOpacity="0.3" />
      <path d="M270 156 C304 142 338 150 360 170" fill="none" stroke="#668BFF" strokeOpacity="0.3" />
      <path
        d="M332 78 C368 112 372 158 332 198 C308 156 306 114 332 78 Z"
        fill="#8B78EB"
        opacity="0.55"
      />
      <path
        d="M348 92 h14 v-14 M392 128 h14 v14 M392 176 h-14 v14 M348 198 h-14 v-14"
        fill="none"
        stroke="#E8EDF7"
        strokeOpacity="0.7"
        strokeWidth="1.25"
      />
      <Label x="78" y="250">
        DETECT
      </Label>
      <Label x="268" y="250">
        SEGMENT
      </Label>
      <Label x="470" y="250">
        CLASSIFY
      </Label>
      <circle cx="118" cy="232" r="3" fill="#668BFF" />
      <circle cx="312" cy="232" r="3" fill="#8B78EB" />
      <circle cx="514" cy="232" r="3" fill="#668BFF" />
    </>
  );
}

function SlidesDiagram() {
  return (
    <>
      <Label x="48" y="40">
        PROPOSAL
      </Label>
      <Label x="390" y="40">
        SLIDES
      </Label>
      <rect x="48" y="58" width="150" height="176" rx="10" fill="#151E30" stroke="#2A3650" />
      <rect x="66" y="78" width="86" height="6" rx="2" fill="#668BFF" />
      {[104, 122, 140, 158, 176, 194].map((y, index) => (
        <rect
          key={y}
          x="66"
          y={y}
          width={index % 3 === 2 ? 70 : 104}
          height="4"
          rx="2"
          fill="#E8EDF7"
          opacity={0.22 + (index % 2) * 0.12}
        />
      ))}
      <path d="M214 146 H268" fill="none" stroke="#668BFF" strokeWidth="1.5" />
      <path d="M260 140 L272 146 L260 152" fill="none" stroke="#668BFF" strokeWidth="1.5" />

      <rect x="300" y="78" width="250" height="132" rx="10" fill="#151E30" stroke="#2A3650" />
      <rect x="328" y="96" width="210" height="108" rx="8" fill="#101828" stroke="#8B78EB" strokeOpacity="0.45" />
      <rect x="356" y="114" width="168" height="86" rx="8" fill="#151E30" stroke="#668BFF" />
      <rect x="374" y="132" width="78" height="6" rx="2" fill="#668BFF" />
      <rect x="374" y="148" width="116" height="4" rx="2" fill="#E8EDF7" opacity="0.35" />
      <rect x="374" y="160" width="96" height="4" rx="2" fill="#E8EDF7" opacity="0.22" />
      <rect x="374" y="176" width="40" height="12" rx="3" fill="#8B78EB" opacity="0.45" />
    </>
  );
}

function CornerBox({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  const arm = 12;
  return (
    <path
      d={`M${x} ${y + arm} V${y} H${x + arm} M${x + w - arm} ${y} H${x + w} V${y + arm} M${x + w} ${y + h - arm} V${y + h} H${x + w - arm} M${x + arm} ${y + h} H${x} V${y + h - arm}`}
      fill="none"
      stroke="#668BFF"
      strokeWidth="1.5"
    />
  );
}

function ParkingDiagram() {
  const stalls = [48, 138, 228, 318, 408, 498];
  const occupied = new Set([138, 408]);

  return (
    <>
      <Label x="48" y="36">
        PKLOT STUDY
      </Label>
      <rect x="36" y="52" width="568" height="176" rx="12" fill="#151E30" stroke="#2A3650" />
      {stalls.map((x) => (
        <g key={x}>
          <rect x={x} y="70" width="74" height="140" rx="6" fill="#101828" stroke="#2A3650" />
          {occupied.has(x) ? (
            <>
              <rect x={x + 12} y="104" width="50" height="72" rx="8" fill="#8B78EB" opacity="0.35" />
              <CornerBox x={x + 6} y={96} w={62} h={88} />
            </>
          ) : null}
        </g>
      ))}
    </>
  );
}
