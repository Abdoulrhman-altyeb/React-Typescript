type ListProps = {
    text: string,
    complete: boolean,
}

type ToggleTodo = (selectedTodo: ListProps) => void;

type addHandel = (newTodo: string) => void;