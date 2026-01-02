# 119-web-client

Next.js + Tailwind CSS v4 + 대피로 디자인 시스템

## 프로젝트 구조

```
/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # 루트 레이아웃
│   ├── page.tsx           # 홈 페이지
│   └── globals.css        # 전역 스타일 (Tailwind + 디자인 시스템)
│
├── public/                 # 정적 파일
│
└── next.config.ts          # Next.js 설정
```

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4, Vanilla Extract
- **Design System**: @team-numberone/daepiro-design-system
- **Linting**: Biome, ESLint
- **TypeScript**: 5.9

## 개발 명령어

```bash
pnpm dev          # 개발 서버 시작
pnpm build        # 프로덕션 빌드
pnpm start        # 프로덕션 서버 시작
pnpm lint         # 린트 검사
pnpm format       # 코드 포맷팅
```

## 주요 기능

- Tailwind CSS v4의 `@theme` 블록을 사용한 디자인 토큰 통합
- 대피로 디자인 시스템의 Primary 컬러를 그린(secondary)으로 오버라이드
- Vanilla Extract 지원
