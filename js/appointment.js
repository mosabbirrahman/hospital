  // Mobile menu toggle
  document.getElementById('menu-toggle').addEventListener('click', function() {
    const menu = document.getElementById('mobile-menu');
    menu.classList.toggle('hidden');
});

// Initialize date picker
flatpickr("#appointmentDate", {
    minDate: "today",
    maxDate: new Date().fp_incr(30), // 30 days from now
    disable: [
        function(date) {
            // Disable weekends
            return (date.getDay() === 0 || date.getDay() === 6);
        }
    ]
});

// Time slot selection
document.querySelectorAll('.time-slot').forEach(slot => {
    slot.addEventListener('click', function() {
        document.querySelectorAll('.time-slot').forEach(s => {
            s.classList.remove('selected-slot');
        });
        this.classList.add('selected-slot');
    });
});

// Step navigation
document.getElementById('nextToStep2').addEventListener('click', function() {
    document.getElementById('step1').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
    updateProgress(2);
});

document.getElementById('backToStep1').addEventListener('click', function() {
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step1').classList.remove('hidden');
    updateProgress(1);
});

document.getElementById('nextToStep3').addEventListener('click', function() {
    document.getElementById('step2').classList.add('hidden');
    document.getElementById('step3').classList.remove('hidden');
    updateProgress(3);
});

document.getElementById('backToStep2').addEventListener('click', function() {
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step2').classList.remove('hidden');
    updateProgress(2);
});

document.getElementById('nextToStep4').addEventListener('click', function() {
    document.getElementById('step3').classList.add('hidden');
    document.getElementById('step4').classList.remove('hidden');
    updateProgress(4);
    
    // Update confirmation summary (in a real app, this would use actual selected values)
    document.getElementById('confirmedService').textContent = 'Primary Care';
    document.getElementById('confirmedDoctor').textContent = 'Dr. Sarah Johnson';
    document.getElementById('confirmedDate').textContent = 'Monday, June 12, 2023';
    document.getElementById('confirmedTime').textContent = '10:00 AM';
});

document.getElementById('backToStep3').addEventListener('click', function() {
    document.getElementById('step4').classList.add('hidden');
    document.getElementById('step3').classList.remove('hidden');
    updateProgress(3);
});

document.getElementById('confirmAppointment').addEventListener('click', function() {
    document.getElementById('step4').classList.add('hidden');
    document.getElementById('confirmationMessage').classList.remove('hidden');
    
    // Update final confirmation details (in a real app, this would use actual values)
    document.getElementById('finalService').textContent = 'Primary Care';
    document.getElementById('finalDoctor').textContent = 'Dr. Sarah Johnson';
    document.getElementById('finalDate').textContent = 'Monday, June 12, 2023';
    document.getElementById('finalTime').textContent = '10:00 AM';
    document.getElementById('finalEmail').textContent = document.getElementById('email').value || 'your@email.com';
});

function updateProgress(step) {
    // Reset all steps
    document.querySelectorAll('.step div:first-child').forEach((el, index) => {
        el.classList.remove('bg-primary', 'text-white');
        el.classList.add('bg-gray-200', 'text-gray-600');
        
        if (index + 1 <= step) {
            el.classList.remove('bg-gray-200', 'text-gray-600');
            el.classList.add('bg-primary', 'text-white');
        }
    });
    
    // Update progress bar
    const progressBar = document.querySelector('.absolute.h-1.bg-primary');
    progressBar.style.width = `${(step / 4) * 100}%`;
}