type ListProps = {
    text: string,
    complete: boolean,
    id: string
}

type ToggleTodo = (selectedTodo: ListProps) => void;

type addHandel = (newTodo: string) => void;