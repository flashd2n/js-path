const taskRepo = () => {

    const privateStuff = 'no one knows this';

    const get = (id) => {
        console.log('Getting task with id ' + id);

        return {
            name: 'Task from db'
        };
    };

    return {
        get: get
    };
}

module.exports = {
    repo: taskRepo()    
};
