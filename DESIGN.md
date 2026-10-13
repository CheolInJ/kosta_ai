---
version: alpha
name: 책길 (Book Path)
description: 개인용 독서 기록 앱의 디자인 시스템. 차분함 · 조용함 · 종이책. 종이 위에 먹으로 쓰듯 조용하게, 파랑은 누를 곳 하나와 가장 중요한 숫자에만.
colors:
  paper: "#F5F1E8"
  sheet: "#FBF9F4"
  wax: "#EDE6D3"
  rule: "#DDD6CA"
  ink: "#2B2723"
  pencil: "#6B635A"
  primary: "#2F4A6B"
typography:
  display-number:
    fontFamily: MaruBuri
    fontSize: 2rem
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.01em
    fontFeature: '"tnum"'
  headline:
    fontFamily: MaruBuri
    fontSize: 1.25rem
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: 0em
  goal-line:
    fontFamily: MaruBuri
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  title-serif:
    fontFamily: MaruBuri
    fontSize: 1rem
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0em
  body-serif:
    fontFamily: MaruBuri
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0em
  review:
    fontFamily: MaruBuri
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.8
    letterSpacing: 0em
  greeting:
    fontFamily: Pretendard
    fontSize: 1.25rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.02em
  body:
    fontFamily: Pretendard
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.01em
  body-strong:
    fontFamily: Pretendard
    fontSize: 1rem
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: -0.01em
  label:
    fontFamily: Pretendard
    fontSize: 0.85rem
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: -0.01em
    fontFeature: '"tnum"'
  label-strong:
    fontFamily: Pretendard
    fontSize: 0.85rem
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: -0.01em
    fontFeature: '"tnum"'
rounded:
  none: 0px
  md: 8px
  full: 999px
spacing:
  sm: 8px
  md: 16px
  lg: 32px
components:
  page:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: 16px
    width: 480px
  card:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 16px
  card-quiet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.pencil}"
    rounded: "{rounded.md}"
    padding: 16px
  summary-count:
    textColor: "{colors.primary}"
    typography: "{typography.display-number}"
  summary-label:
    textColor: "{colors.pencil}"
    typography: "{typography.label}"
  streak-number:
    textColor: "{colors.pencil}"
    typography: "{typography.display-number}"
  list-group:
    backgroundColor: "{colors.sheet}"
    rounded: "{rounded.md}"
  divider:
    backgroundColor: "{colors.rule}"
    height: 1px
  list-item:
    textColor: "{colors.ink}"
    padding: 16px
  book-title:
    textColor: "{colors.ink}"
    typography: "{typography.title-serif}"
  book-position:
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
  book-meta:
    textColor: "{colors.pencil}"
    typography: "{typography.label}"
  book-review:
    textColor: "{colors.pencil}"
    typography: "{typography.review}"
  section-title:
    textColor: "{colors.ink}"
    typography: "{typography.title-serif}"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.sheet}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.md}"
    padding: 8px
    height: 40px
  button-primary-disabled:
    backgroundColor: "{colors.wax}"
    textColor: "{colors.pencil}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.md}"
    padding: 8px
    height: 40px
  button-edit:
    textColor: "{colors.ink}"
    typography: "{typography.label-strong}"
    padding: 8px
  button-delete:
    textColor: "{colors.pencil}"
    typography: "{typography.label}"
    padding: 8px
  button-secondary:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 8px
  input:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.md}"
    padding: 8px 16px
  tab:
    textColor: "{colors.pencil}"
    typography: "{typography.body}"
    padding: 8px
  tab-active:
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    padding: 8px
  toggle-track:
    backgroundColor: "{colors.wax}"
    rounded: "{rounded.full}"
  toggle-option:
    textColor: "{colors.pencil}"
    typography: "{typography.body}"
    rounded: "{rounded.full}"
    padding: 8px
  toggle-option-active:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    rounded: "{rounded.full}"
    padding: 8px
  progress-track:
    backgroundColor: "{colors.wax}"
    rounded: "{rounded.full}"
    height: 8px
  progress-fill:
    backgroundColor: "{colors.ink}"
    rounded: "{rounded.full}"
    height: 8px
  chart-bar:
    backgroundColor: "{colors.pencil}"
    rounded: "{rounded.none}"
  chart-bar-selected:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.none}"
  chart-value:
    textColor: "{colors.primary}"
    typography: "{typography.label-strong}"
  chart-axis-label:
    textColor: "{colors.pencil}"
    typography: "{typography.label}"
  tooltip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    typography: "{typography.label-strong}"
    rounded: "{rounded.md}"
    padding: 0px 8px
  error-message:
    textColor: "{colors.ink}"
    typography: "{typography.label-strong}"
---

# 책길 (Book Path) DESIGN.md

> 이 파일은 Google Labs의 DESIGN.md 형식(alpha)을 따른다. 위 YAML은 기계가 읽는 토큰이고, 아래 본문은 그 이유와 쓰는 법이다.
> 근거 자료: `DESIGN_PLAN.md`(조사 근거와 대비 계산), 시각 예시: `DESIGN_PREVIEW.html`.
> 상태: 계획 단계. 실제 앱(`src/App.css`)에는 아직 적용하지 않았다.

## Overview

**책길**은 한 사람이 쓰는 독서 기록 앱이다. 어디까지 읽었는지 잊지 않게 하고, 조용하게 동기를 주는 것이 목적이다.

- **분위기:** 차분함 · 조용함 · 종이책. 미색 종이 위에 먹과 연필로 쓴 기록처럼 보이게 한다.
- **원칙 한 줄:** 종이 위에 먹으로 쓰듯 조용하게, 파랑은 누를 곳 하나와 가장 중요한 숫자에만.
- **위계:** 가장 중요한 것은 **현재 현황**(맨 위 요약)이다. 덜 중요한 정보는 크기를 줄이지 않고 연필 색으로 옅게 한다.
- **화면 문구:** 모든 문구는 "~해요"로 끝내고, 사용자는 "독자님"이라고 부른다.
- **근거:** 2026 Pantone 올해의 색 Cloud Dancer(11-4201), WGSN 2026 Wax Paper, 따뜻한 뉴트럴에 포인트 하나를 쓰는 2026 UI 흐름, 차분한 독서·기록 앱 벤치마킹(iOS inset grouped, Apple Books, Bear, Day One)을 참고했다.

## Colors

7색만 쓴다. 뉴트럴 6색과 강조색 1색이다. 아래 색 값은 트렌드를 참고한 제안값이며 공식 색 값이 아니다.

| 토큰 | 이름 | 색 값 | 쓰이는 곳 |
|---|---|---|---|
| `paper` | 미색 종이 | `#F5F1E8` | 화면 전체 바탕 |
| `sheet` | 낱장 | `#FBF9F4` | 카드와 목록 묶음 바탕, 입력칸 바탕, 토글의 선택된 칸, 주요 버튼 글자, 툴팁 글자 |
| `wax` | 왁스페이퍼 | `#EDE6D3` | 진행 막대 트랙, 토글 트랙, 비활성 버튼 바탕 |
| `rule` | 괘선 | `#DDD6CA` | 카드 테두리, 목록 구분선, 탭 줄 아래 선, 그래프 바닥선 (장식선 전용) |
| `ink` | 먹 | `#2B2723` | 제목, 본문, 책 제목, 읽은 위치, 활성 탭과 밑줄, 진행 막대 채움, 라디오 점, 툴팁 바탕, 오류 문구, **고쳐요** |
| `pencil` | 연필 | `#6B635A` | 인사말, 라벨, 저자, 날짜, placeholder, 비활성 탭, 감상, 연속 독서일, 목표 문장, 입력칸 테두리, 그래프 일반 막대와 축 글자, **지워요** |
| `primary` | 잉크 블루 | `#2F4A6B` | **강조색 하나뿐:** 주요 버튼, 홈 요약 숫자, 독서 현황 대표 숫자, 선택된 막대와 그 값 |

**강조색 규칙**
- 잉크 블루는 **누를 곳 하나**(화면마다 하나인 주요 버튼)와 **가장 중요한 숫자**에만 쓴다.
- 활성 탭, 토글·라디오 선택, 진행 막대는 먹으로 처리한다.
- 빨강은 쓰지 않는다. 오류는 먹 글자 + "!" + 먹 2px 테두리로, 삭제는 확인 창으로 보완한다.

**대비 (WCAG 계산값)**

| 조합 | 대비 |
|---|---|
| 먹 / 미색 종이 | 13.15 |
| 먹 / 낱장 | 14.08 |
| 연필 / 미색 종이 | 5.24 |
| 연필 / 낱장 | 5.61 |
| 잉크 블루 / 미색 종이 | 8.06 |
| 낱장 / 잉크 블루 (버튼 글자) | 8.63 |
| 괘선 / 미색 종이 | 1.28 (장식선 전용, 입력 테두리로 쓰지 않음) |

## Typography

**Pretendard + 마루 부리(MaruBuri)** 두 글꼴, 굵기는 400과 600만 쓴다.

- **나누는 원칙:** 기록과 감정은 마루 부리, 조작과 정보는 Pretendard다.
  - 마루 부리: 숫자, 책 제목, 감상, 목록 제목
  - Pretendard: 버튼, 라벨, 날짜, 입력칸
- **크기는 4단계만:** 0.85rem / 1rem / 1.25rem / 2rem
- **숫자:** 모든 숫자에 `tnum`(tabular-nums)을 적용해 자릿수를 맞춘다.
- **기울임:** 쓰지 않는다. 한글에 가짜 이탤릭이 생기는 것을 막기 위해서다.

| 토큰 | 쓰는 곳 |
|---|---|
| `display-number` | 요약 숫자(1권 / 4권 / 7권), 연속 독서일 "5일째" |
| `headline` | 독서 현황 헤드라인 "독자님, 2026년에 4권 읽었어요" |
| `goal-line` | "2권 중 1권 읽었어요" |
| `title-serif` | 책 제목, 목록 제목, 앱 이름 |
| `body-serif` | 요약 제목 문장, 빈 목록 안내 |
| `review` | 짧은 감상 (줄간격 1.8) |
| `greeting` | 인사말 |
| `body` | 탭, 토글, 입력칸, placeholder, 일반 문장 |
| `body-strong` | 읽은 위치 "5장까지 읽었어요", 주요 버튼, 활성 탭, 연도 이동 |
| `label` | 요약 라벨, 저자, 날짜, 그래프 축, 안내 문구, 지워요, 취소해요 |
| `label-strong` | 카드 라벨, 오류 문구, 툴팁, 그래프 값, 고쳐요 |

**불러오기**
- Pretendard는 dynamic subset CSS를 쓴다.
- 마루 부리는 `@kfonts/maruburi`의 woff2를 `@font-face`로 선언한다. 400과 600을 하나의 family로 묶는다.
- 마루 부리는 굵기당 약 800KB라서, 서브셋을 만들어 직접 호스팅하는 것을 검토한다.

## Layout

- **한 단 배치:** 최대 너비 480px 컨테이너를 화면 가운데에 둔다. 좌우 여백은 16px이다.
- **간격은 3단계만 쓴다.**
  - `sm` 8px: 한 묶음 안 (줄과 줄, 입력칸끼리, 제목 아래)
  - `md` 16px: 카드 안쪽 여백, 목록 항목의 위아래 여백, 카드 안의 작은 묶음 사이
  - `lg` 32px: 묶음 사이 (카드와 카드, 목록과 목록, 목록 제목 위)
- **제목 간격:** 위쪽을 아래쪽보다 넓게 둔다. 목록 제목은 위 32px, 아래 8px이다.
- **홈 순서:** 요약(현재 현황) → 연속 독서일·목표(카드 하나) → 책 추가 → 지금 읽고 있어요 → 다 읽었어요
- **정렬**
  - 기본은 왼쪽 정렬이다.
  - 가운데 정렬은 요약 숫자 3칸에만 쓴다.
  - 날짜와 "목표까지 N권 남았어요" 같은 보조 수치는 오른쪽 정렬해서 세로줄을 맞춘다.
  - 그래프의 월 라벨은 막대 가운데에 맞춘다.

## Elevation & Depth

- **그림자는 쓰지 않는다** (`box-shadow: none`). 종이는 겹쳐 있어도 떠 있지 않다.
- **깊이는 면 색과 선으로 만든다.**
  - 바탕은 `paper`, 그 위 카드와 목록 묶음은 `sheet`다.
  - 테두리는 `rule` 1px다.
  - 둘의 밝기 차이(1.07)는 작아서, 면을 구분하는 일은 괘선이 맡는다.
- **선 두께는 1px 하나만 쓴다.** 예외는 먹 2px 두 곳이다.
  - 활성 탭 밑줄
  - 오류 입력칸 테두리
- **입력칸 테두리는 `pencil`을 쓴다** (낱장 위 5.61:1). 괘선은 대비가 낮아 입력칸에는 쓰지 않는다.

## Shapes

- **모서리는 두 가지만 쓴다.**
  - `md` 8px: 카드, 목록 묶음, 입력칸, 버튼, 툴팁
  - `full` 999px: 월별/연별 토글, 진행 막대
- **예외:** 그래프 막대는 `none`(0)이다. 종이에 인쇄한 막대처럼 각지게 둔다.
- **진행 막대:** 높이 8px이다.
- **아이콘:** 이모지가 아닌 선 아이콘(SVG)만 쓴다. 크기 16px, 색은 글자색(`currentColor`)을 따른다.

## Components

| 컴포넌트 | 생김새 |
|---|---|
| `card` | 낱장 바탕, 괘선 1px, 8px 모서리, 안쪽 16px. 요약, 책 추가 폼, 그래프에 쓴다 |
| `card-quiet` | 연속 독서일과 이번 달 목표를 **카드 하나**에 담는다. 두 줄 사이는 괘선으로 나누고, 글자는 연필로 옅게 한다 |
| `summary-count` | 요약 숫자 3칸. 마루 부리 2rem, **잉크 블루**. 칸 사이는 세로 괘선이고, 아래에 "지금 N권을 읽고 있어요"를 둔다 |
| `divider` | 괘선 1px. 카드 테두리, 목록 항목 사이, 요약 칸 사이, 탭 줄 아래, 그래프 바닥선에 같은 선을 쓴다 |
| `list-group` / `list-item` | 책마다 카드를 두지 않는다. 묶음 하나 안에서 항목 사이를 괘선 1px로 나눈다(inset grouped). 항목 안쪽은 16px |
| `book-*` | 제목은 마루 부리 600. 읽은 위치는 Pretendard 600 먹. 저자와 날짜는 연필이고 날짜는 오른쪽 정렬. 감상은 마루 부리 연필에 왼쪽 괘선을 둔다 |
| `button-primary` | 화면마다 하나. 잉크 블루 바탕에 낱장 글자, 높이 40px |
| `button-edit` / `button-delete` | 테두리 없는 텍스트 버튼. 고쳐요는 **연필 모양 아이콘 + 먹 600**, 지워요는 **휴지통 모양 아이콘 + 연필 400**. 아이콘은 사용자가 추후 제공하며, 받기 전까지는 색과 굵기 단계로만 구분한다. 아이콘은 글자 앞 8px 간격, 16px 크기다. 누를 수 있는 영역은 위아래 여백으로 넓힌다 |
| `input` | 낱장 바탕, 연필 1px 테두리, 1rem(iOS 확대 방지). 오류일 때는 먹 2px 테두리와 "! 독자님, 책 제목을 적어 주세요" |
| `tab` / `tab-active` | 밑줄형. 활성 탭은 먹 600에 먹 2px 밑줄. 탭 줄 아래는 괘선 1px |
| `toggle-*` | 세그먼트형. 트랙은 왁스페이퍼, 선택된 칸은 낱장 바탕에 먹 600 |
| `progress-*` | 트랙은 왁스페이퍼, 채움은 먹, 높이 8px |
| `chart-*` | 격자선 없이 바닥선(괘선) 하나만 둔다. 일반 막대는 연필, 선택 막대와 값은 잉크 블루. 선택한 축 라벨은 먹 600. 막대 사이는 8px |
| `tooltip` | 먹 바탕에 낱장 글자 |

## Do's and Don'ts

**Do**
- 현재 현황(요약)을 맨 위에, 가장 크게(2rem) 둔다.
- 덜 중요한 정보는 크기 대신 연필 색으로 옅게 한다.
- 위계는 굵기(400 / 600)와 먹·연필 단계로 만든다.
- 간격은 8 / 16 / 32px, 글자 크기는 4단계, 모서리는 8px와 999px만 쓴다.
- 모든 숫자에 tabular-nums를 적용한다.
- 고쳐요와 지워요는 아이콘과 색 단계(먹 / 연필)로 구분한다.
- 화면 문구는 "~해요"로 끝내고 "독자님"이라고 부른다.

**Don't**
- 잉크 블루를 주요 버튼과 가장 중요한 숫자 외에 쓰지 않는다. 탭, 토글, 진행 막대, 링크에도 쓰지 않는다.
- 빨강이나 8번째 색을 더하지 않는다. 오류와 삭제도 마찬가지다.
- 그림자, 그라데이션, 이모지 아이콘, 카드 안의 카드를 쓰지 않는다.
- 책마다 카드를 따로 두지 않는다.
- 괘선을 입력칸 테두리처럼 알아봐야 하는 선에 쓰지 않는다.
- 글자에 기울임을 쓰지 않는다.
- "N권 뒤처졌어요"처럼 압박하는 문구를 쓰지 않는다.
