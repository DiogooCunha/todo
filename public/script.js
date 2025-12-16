window.onload = async function listAllTasks() {
  try {
    const res = await fetch("http://localhost:3333/tasks/", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (res.status !== 200) {
      alert("Something went wrong");
    }

    const tasks = await res.json();
    console.log(tasks);

    const list = document.getElementById("list");
    list.innerHTML = "";

    tasks.forEach((task) => {
      const li = document.createElement("li");
      li.innerHTML = `
    <strong>ID:</strong> ${task._id}<br>
    <strong>Title:</strong> ${task._title}<br>
    <strong>Description:</strong> ${task._description}<br>
    <strong>Priority:</strong> ${task._priority}<br>
    <strong>Created At:</strong> ${new Date(
      task._createdAt
    ).toLocaleString()}<br>
    <strong>Completed At:</strong> ${
      task._completedAt
        ? new Date(task._completedAt).toLocaleString()
        : "Not completed"
    }
  `;
      list.appendChild(li);
    });
  } catch (err) {
    console.log(err);
  }
};

async function newTask(e) {
  e.preventDefault();

  const title_campo = document.getElementById("title");
  const description_campo = document.getElementById("description");
  const priority_campo = document.getElementById("priority");

  const title = title_campo.value;
  const description = description_campo.value;
  const priority = priority_campo.value;

  try {
    const res = await fetch("http://localhost:3333/tasks/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        priority,
      }),
    });

    if (!res.ok) {
      alert("Something went wrong");
    }
    const result = await res.json();
    await listAllTasks();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
}
