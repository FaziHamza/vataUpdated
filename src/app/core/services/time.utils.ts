export class TimeUtils {
    public hours = Array.from(new Array(24), (x, index) => {
        if (index < 10) {
            return '0' + index;
        }
        return index;
    });
    public minutes: any[] = Array.from(new Array(60), (x, index) => {
        if (index < 10) {
            return '0' + index;
        }
        return index;
    });

    public week = [
        {
            id: '1',
            day: 'Monday'
        },
        {
            id: '2',
            day: 'Tuesday'
        },
        {
            id: '3',
            day: 'Wednesday'
        },
        {
            id: '4',
            day: 'Thursday'
        },
        {
            id: '5',
            day: 'Friday'
        },
        {
            id: '6',
            day: 'Saturday'
        },
        {
            id: '7',
            day: 'Sunday'
        }
    ];
}
