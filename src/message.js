const message = (message, delay = 1000) => {
    const animationDuration = 300

    const notification = document.createElement("div");
    notification.classList.add("notification")
    notification.innerHTML = `
          <div class="notification-icon">
            !
          </div>
        
          <p>
            ${message}
          </p>
    `;

    document.documentElement.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = `closeNotification ${animationDuration}ms ease`

        setTimeout(() => {
            notification.remove()
        }, animationDuration - 100);
    }, delay)
};

export default message;