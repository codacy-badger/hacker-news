import { CustomDatePipe } from './date-pipe.pipe';

describe('DatePipePipe', () => {
    it('create an instance', () => {
        const pipe = new CustomDatePipe('en');
        expect(pipe).toBeTruthy();
    });
});
