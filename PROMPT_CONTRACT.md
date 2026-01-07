# Brand OS Prompt Contract (Shopify Theme)

## Invariants
- Shopify theme files must be deployable (Liquid + JSON schema).
- `main` is brand-agnostic. Brand specifics live in `brand/*`.
- Avoid Unicode/symbols in branch names, file names, IDs, CSS classes, and setting IDs.

## Section Generation Contract
- Output valid Liquid with a complete `{% schema %}` block.
- Compatible with Dawn.
- No inline CSS; prefer theme CSS and `assets/ai-tokens.css`.
- Class prefix: `ai-<section-name>` (kebab-case).
- Setting IDs: `snake_case`.
- Accessibility required.

## Repo Conventions
- AI sections: `sections/ai-*.liquid`
- Tokens: `assets/ai-tokens.css`
- Brand presets: `config/settings_data.json`

## Branching
- `main`: shared system + shared sections
- `brand/<brand-slug>`: tokens + presets + brand defaults
