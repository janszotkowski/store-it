'use client';

import * as React from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Control } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

type FormType = 'sign-in' | 'sign-up';

type AuthFormProps = {
    type: FormType;
} & Partial<{
    onSubmitSuccess: () => void;
    onSubmitError: (error: string) => void;
}>;

const authFormSchema = (formType: FormType) => {
    return z.object({
        email: z.string().email('Neplatný formát emailu'),
        userName: formType === 'sign-up'
            ? z.string()
                .min(2, 'Uživatelské jméno musí mít alespoň 2 znaky')
                .max(50, 'Uživatelské jméno může mít maximálně 50 znaků')
            : z.string().optional()
    });
};

type FormInputFieldProps = {
    label: string;
    name: 'email' | 'userName';
    placeholder: string;
    control: Control<{
        email: string;
        userName?: string;
    }>;
};

const FormInputField = React.memo<FormInputFieldProps>((props: FormInputFieldProps) => (
    <FormField
        control={props.control}
        name={props.name}
        render={({ field }) => (
            <FormItem>
                <div className={'!shad-form-item'}>
                    <FormLabel className={'!shad-form-label'}>{props.label}</FormLabel>
                    <FormControl>
                        <Input
                            className={'!shad-input'}
                            placeholder={props.placeholder}
                            {...field}
                        />
                    </FormControl>
                </div>
                <FormMessage className={'!shad-form-message'} />
            </FormItem>
        )}
    />
));

FormInputField.displayName = 'FormInputField';

export const AuthForm: React.FC<AuthFormProps> = (props: AuthFormProps): React.ReactElement => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [errorMessage, setErrorMessage] = React.useState<string | undefined>();

    const formSchema = React.useMemo(() => authFormSchema(props.type), [props.type]);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            userName: '',
            email: ''
        }
    });

    React.useEffect(() => {
        setErrorMessage(undefined);
        form.reset();
    }, [props.type, form]);

    const onSubmit = React.useCallback(async (values: z.infer<typeof formSchema>) => {
        try {
            setIsLoading(true);
            setErrorMessage(undefined);

            await new Promise<void>((resolve) => {
                window.setTimeout(() => {
                    console.log('Odeslaná data:', values);
                    resolve();
                }, 1000);
            });

            props.onSubmitSuccess?.();
        } catch (error) {
            const errorMsg = error instanceof Error ? error.message : 'Došlo k chybě';
            setErrorMessage(errorMsg);
            props.onSubmitError?.(errorMsg);
        } finally {
            setIsLoading(false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.onSubmitSuccess, props.onSubmitError]);

    const isSignIn = props.type === 'sign-in';
    const titleText = isSignIn ? 'Přihlášení' : 'Registrace';
    const linkText = isSignIn ? 'Registrovat se' : 'Přihlásit se';
    const questionText = isSignIn ? 'Nemáte ještě účet?' : 'Již máte účet?';

    return (
        <Form {...form}>
            <h1 className={'h1 mb-12 mx-auto w-max'}>
                {titleText}
            </h1>
            <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-8'}>
                {!isSignIn && (
                    <FormInputField
                        label="Uživatelské jméno"
                        name="userName"
                        placeholder="Zadejte uživatelské jméno"
                        control={form.control}
                    />
                )}

                <FormInputField
                    label="Email"
                    name="email"
                    placeholder="Zadejte email"
                    control={form.control}
                />

                <Button
                    type={'submit'}
                    className={'rounded-4xl p-6 w-full cursor-pointer transition-all'}
                    disabled={isLoading}
                >
                    {isLoading ? 'Načítání...' : titleText}
                </Button>

                {errorMessage && (
                    <p className={'error-message text-red-500'}>* {errorMessage}</p>
                )}

                <div className={'flex justify-center'}>
                    <p>{questionText}</p>
                    <Link
                        className={'ml-1 font-medium text-blue-60 hover:text-blue-80'}
                        href={isSignIn ? '/sign-up' : '/sign-in'}
                    >
                        {linkText}
                    </Link>
                </div>
            </form>
        </Form>
    );
};
