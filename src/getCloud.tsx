export default function getCloud(): string[] {
    return `codespaces elon musk lex fridman atom emacs vim vscode lightweight powerlifting bodybuilding earth mars sun rocket launch fire laptop desktop texteditor`
    .split(" ")
    .sort(() => (Math.random() > 0.5 ? 1 : -1));
  }