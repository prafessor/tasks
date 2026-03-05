// Є функція sendDoneStatus:

type Callback = (str: string) => void;

function sendDoneStatus(callback:Callback): void {
  callback("done");
}

// Завдання:

// Типізуйте параметр callback, щоб це була функція, яка приймає рядок і повертав void.