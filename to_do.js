/// TO_DO_LIST///

var tasks = [
    {
        task: "DSA",
        date: "2023-11-16",
        time: "10:00 AM",
        status: "Completed",
        no: Math.round(Math.random() * 1000)
    },
    {
        task: "Project Check",
        date: "2023-11-25",
        time: "08:00 PM",
        status: "Ongoing",
        no: Math.round(Math.random() * 1000)
    },
    {
        task: "Exam Schedule",
        date: "2023-12-12",
        time: "02:00 PM",
        status: "Pending",
        no: Math.round(Math.random() * 1000)
    }
]

// for(var i = 0; i<task.length ; i++){
//     console.log(task[i])
// }

var abc = JSON.stringify(tasks);
localStorage.setItem('tasks', abc);

function adddata() {
    var addata = localStorage.getItem('tasks');
    var adddata = JSON.parse(addata);

    var task = document.getElementById('task').value;
    var status = document.getElementById('status').value;
    var date = document.getElementById('date').value;
    var time = document.getElementById('time').value;
    var editno = document.getElementById('editno').value;

    if (editno) {
        for (var i = 0; i < adddata.length; i++) {
            if (adddata[i]['no'] == editno) {
                adddata[i]['task'] = task;
                adddata[i]['status'] = status;
                adddata[i]['date'] = date;
                adddata[i]['time'] = time;
                document.getElementById('submit').value = "Adddata";
                document.getElementById('editno').value = "";
            }
        }
    }
    else {
        var tas = {
            task: task,
            status: status,
            date: date,
            time: time,
            no: Math.round(Math.random() * 1000)
        }
        adddata.push(tas);
    }

    var hello = JSON.stringify(adddata);
    localStorage.setItem('tasks', hello);
    viewdata();

    var task = document.getElementById('task').value = "";
    var status = document.getElementById('status').value = "";
    var date = document.getElementById('date').value = "";
    var time = document.getElementById('time').value = "";

}

viewdata();

function viewdata() {
    var view = localStorage.getItem('tasks');
    var viewrecord = JSON.parse(view);

    var data = "<table class='js-table'><tr><th>Task</th><th>Satus</th><th>Dedline</th><th colspan='2'>Action</th></tr>"
    for (var i = 0; i < viewrecord.length; i++) {
        data += `<tr>`
        data += `<td>${viewrecord[i]['task']}</td>`
        data += `<td>${viewrecord[i]['status']}</td>`
        data += `<td>${viewrecord[i]['date']} , ${viewrecord[i]['time']}</td>`
        data += `<td><a href="javascript:deledata(${viewrecord[i]['no']})">Delete</a></td>`
        data += `<td><a href="javascript:updatedata(${viewrecord[i]['no']})">Edit</a></td>`
        data += `</tr>`
    }
    data += "</table>"
    document.getElementById('res').innerHTML = data;
}

function deledata(no) {
    var dedata = localStorage.getItem('tasks');
    var deledata = JSON.parse(dedata);

    for (var i = 0; i < deledata.length; i++) {
        if (deledata[i]['no'] == no) {
            deledata.splice(i, 1);
        }
    }
    localStorage.setItem('tasks', JSON.stringify(deledata));
    viewdata();
}

function updatedata(no) {
    var dedata = localStorage.getItem('tasks');
    var deledata = JSON.parse(dedata);

    for (var i = 0; i < deledata.length; i++) {
        if (deledata[i]['no'] == no) {
            document.getElementById('task').value = deledata[i]['task'];
            document.getElementById('status').value = deledata[i]['status'];
            document.getElementById('date').value = deledata[i]['date'];
            document.getElementById('time').value = deledata[i]['time'];
            document.getElementById('editno').value = no;
            document.getElementById('submit').value = "Update";
        }
    }
}
